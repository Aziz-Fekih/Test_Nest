import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Testing dev version';
  }
  sumVariables(a:number,b:number):number{
    return a + b;
  }
}
