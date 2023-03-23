import { IsNotEmpty } from "class-validator";
import { IsNumber, IsString } from "class-validator";


export class CreateCourseDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    @IsNumber()
    duration: number;
    
}
