import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './course.schema';


@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'course',
      schema: CourseSchema
    }])
  ],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
