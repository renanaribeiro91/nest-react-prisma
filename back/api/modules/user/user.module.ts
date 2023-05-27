import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repository/user.repository';
import { AddressService } from '../../shared/services/address.service';
import { PrismaService } from '../../database/prisma.service';
import { ApiService } from '../../remote/api-cep/services/api-cep.service';
import { ApiCepModule } from '../../remote/api-cep/api-cep.module';
import { CustomHttpModule } from '../../integration/custom-http.module';


@Module({
imports: [ApiCepModule, CustomHttpModule],
controllers: [UserController],
providers: [
UserService,
UserRepository,
AddressService,
PrismaService,
ApiService,
],
})
export class UserModule {}
