import {IsNotEmpty, IsNumber, Max, Min} from "class-validator";


export class SumUserDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(5)
    @Max(100)
    a:number
    @IsNumber()
    @IsNotEmpty()
    @Min(5)
    @Max(100)
    b:number
}
