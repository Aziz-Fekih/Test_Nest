import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':a/:b')
  sumVariables(
      @Param('a') a:string,
      @Param('b') b:string,
  ): number {
    return this.appService.sumVariables( parseInt(a, 10) , parseInt(b, 10) ) ;
  }


}
