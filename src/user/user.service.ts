import {Injectable} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {

  public async findAll() {
  return `This action returns all the users`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  sumVariables(a:number,b:number){
    return a+b
  }
}
