import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private StudentModel;
    private CourseModel;
    constructor(StudentModel: any, CourseModel: any);
    create(createStudentDto: CreateStudentDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    findCourses(id: number): Promise<any>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<any>;
    remove(id: number): Promise<any>;
}
