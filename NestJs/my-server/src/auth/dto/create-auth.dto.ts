import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  email(email: any) {
    throw new Error('Method not implemented.');
  }
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsBoolean()
  isAdmin: boolean;
}
