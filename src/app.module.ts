import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhoneModule } from './phone/phone.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [UserModule, AddressModule, PhoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
