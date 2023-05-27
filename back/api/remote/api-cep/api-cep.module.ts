import { Module } from '@nestjs/common';
import { ApiService } from './services/api-cep.service';
import { CustomHttpService } from '../../integration/custom-http.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ApiService, CustomHttpService],
  exports: [ApiService],
})
export class ApiCepModule {}
