import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseService {
    private CourseModel;
    constructor(CourseModel: any);
    create(createCourseDto: CreateCourseDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCourseDto: UpdateCourseDto): Promise<any>;
    remove(id: number): Promise<any>;
}
