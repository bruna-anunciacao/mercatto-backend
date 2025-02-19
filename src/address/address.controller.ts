import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { Prisma, Address } from '@prisma/client';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) {}
    @Post()
    async create(@Body() data: Prisma.AddressCreateInput): Promise<Address> {
        return this.addressService.create(data);
    }
}
