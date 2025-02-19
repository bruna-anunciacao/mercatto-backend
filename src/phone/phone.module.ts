import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PrismaService } from 'src/database/prisma.service';
import { PhoneController } from './phone.controller';

@Module({
    providers: [PhoneService, PrismaService],
    controllers: [PhoneController],
})
export class PhoneModule {

}
