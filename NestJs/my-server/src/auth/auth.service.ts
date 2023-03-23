import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('auth') private AuthModel,
    private jwtService: JwtService,
  ) {}

  private async findUserByEmail(username: any) {
    return await this.AuthModel.findOne({ username });
  }

  async create(createAuthDto: CreateAuthDto) {
    const found = await this.findUserByEmail(createAuthDto.username);
    if (found) {
      return 'User already exists';
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      createAuthDto.password,
      saltRounds,
    );
    createAuthDto.password = hashedPassword;
    const auth = new this.AuthModel(createAuthDto);
    await auth.save();
    return auth;
  }

  async login(loginAuthDto: LoginAuthDto, response: Response) {
    let found = await this.findUserByEmail(loginAuthDto.username);
    if (!found) {
      return 'User not found';
    }
    console.log(loginAuthDto.username, found.username);
    let correct = await bcrypt.compare(loginAuthDto.password, found.password);
    if (!correct) {
      return 'Incorrect password';
    }

    let myJWT = await this.jwtService.sign({
      name: found.firstName + ' ' + found.lastName,
      isAdmin: found.isAdmin,
    });

    response.header('x-auth-token', myJWT);
    response.cookie('x-auth-token', myJWT);

    return found;
  }

  findAll() {
    return this.AuthModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
