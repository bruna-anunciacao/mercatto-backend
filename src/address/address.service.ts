import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Address, Prisma } from '@prisma/client';

@Injectable()
export class AddressService {
    constructor(private prisma: PrismaService) {}
    async address(
        addressWhereUniqueInput: Prisma.AddressWhereUniqueInput,
    ): Promise<Address | null> {
        return this.prisma.address.findUnique({
            where: addressWhereUniqueInput,
        });
    }

    async addresses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AddressWhereUniqueInput;
        where?: Prisma.AddressWhereInput;
        orderBy?: Prisma.AddressOrderByWithRelationInput;
    }): Promise<Address[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.address.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async create(data: Prisma.AddressCreateInput): Promise<Address> {
        return this.prisma.address.create({
            data,
        });
    }
}