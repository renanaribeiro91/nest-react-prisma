import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CustomHttpService } from './custom-http.service';


@Module({
  imports: [HttpModule],
  providers:[CustomHttpService],
  exports: [CustomHttpService],
})
export class CustomHttpModule {}
