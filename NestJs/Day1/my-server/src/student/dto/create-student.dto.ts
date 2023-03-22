import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    age: number;
    @IsNotEmpty()
    courseIds: number[];

}
