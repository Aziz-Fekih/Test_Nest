import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {SumUserDto} from "./dto/sum_user.dto";

@Controller('user')

export class UserController {
  constructor(private readonly userService: UserService) {
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return createUserDto
  }
  @Post('sum')
  sumVariables(
      @Body() sumBody:SumUserDto
  )
  {
    return this.userService.sumVariables(sumBody.b,sumBody.a)

  }
  @Get()
  //this decorator indicates the status code of the methode
  @HttpCode(201)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }



}
