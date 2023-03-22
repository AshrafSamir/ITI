import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('student') private StudentModel, @InjectModel('course') private CourseModel){}


  async create(createStudentDto: CreateStudentDto) {
    let std =  new this.StudentModel(createStudentDto)
    await std.save()
    console.log(std)
    return std;
  }

  async findAll() {
    return await this.StudentModel.find({})
  }

  async findOne(id: number) {
    return await this.StudentModel.findOne({id})
    
  }

  async findCourses(id: number){
    let std = await this.StudentModel.findOne({id})
    let courseIds:any = [];
    for(let i = 0; i<std.courseIds.length;i++){
      let course = await this.CourseModel.findOne({id:std.courseIds[i]})
      if(course)courseIds.push(course)
    }
    return courseIds
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.StudentModel.findOneAndUpdate({id}, updateStudentDto)
  }

  async remove(id: number) {
    return await this.StudentModel.deleteOne({id})
  }
}
