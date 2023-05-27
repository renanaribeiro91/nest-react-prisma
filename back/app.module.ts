import { Module } from '@nestjs/common';
import { UserModule } from './api/modules/user/user.module';
import { PrismaModule } from './api/database/prisma.module';
import { CustomHttpModule } from './api/integration/custom-http.module';
import { ApiCepModule } from './api/remote/api-cep/api-cep.module';


@Module({
  imports: [UserModule,PrismaModule,CustomHttpModule,ApiCepModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
