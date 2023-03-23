import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { StudentsLoggerMW } from './middleWares/StudentsLoggerMW';
import { CoursesLoggerMW } from './middleWares/CoursesLoggerMW';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/auth.guard';

@Module({
  imports: [
    CourseModule,
    StudentModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/udacity'),
    AuthModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(StudentsLoggerMW, CoursesLoggerMW).forRoutes('*');
  }
}
