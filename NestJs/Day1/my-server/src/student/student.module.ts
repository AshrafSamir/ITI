import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema';
import { CourseSchema } from 'src/course/course.schema';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports:[
    MongooseModule.forFeature([{
      name:'student',
      schema: StudentSchema
    },{
      name:'course',
      schema: CourseSchema 
    }])
  ]
})
export class StudentModule {}
