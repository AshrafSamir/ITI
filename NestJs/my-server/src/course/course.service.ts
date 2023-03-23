import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel('course') private CourseModel){}

  async create(createCourseDto: CreateCourseDto) {
    let std =  new this.CourseModel(createCourseDto)
    await std.save()
    console.log(std)
    return std;
  }

  async findAll() {
    return await this.CourseModel.find({})
  }

  async findOne(id: number) {
    return await this.CourseModel.findOne({id})
    
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.CourseModel.findOneAndUpdate({id}, updateCourseDto)
  }

  async remove(id: number) {
    return await this.CourseModel.deleteOne({id})
  }
}
