import { Body, Controller, Post } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { Prisma, Phone } from '@prisma/client';

@Controller('phone')
export class PhoneController {
    constructor(private readonly phoneService: PhoneService) {}
    @Post()
    async create(@Body() data: Prisma.PhoneCreateInput): Promise<Phone> {
        return this.phoneService.create(data);
    }
}
