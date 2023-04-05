import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    findCourses(id: number): Promise<any>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<any>;
    remove(id: string): Promise<any>;
}
