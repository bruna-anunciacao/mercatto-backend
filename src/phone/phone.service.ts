import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Phone, Prisma } from '@prisma/client';

@Injectable()
export class PhoneService {
    constructor(private prisma: PrismaService) {}
    async phone(
        phoneWhereUniqueInput: Prisma.PhoneWhereUniqueInput,
    ): Promise<Phone | null> {
        return this.prisma.phone.findUnique({
            where: phoneWhereUniqueInput,
        });
    }

    async phones(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PhoneWhereUniqueInput;
        where?: Prisma.PhoneWhereInput;
        orderBy?: Prisma.PhoneOrderByWithRelationInput;
    }): Promise<Phone[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.phone.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async create(data: Prisma.PhoneCreateInput): Promise<Phone> {
        return this.prisma.phone.create({
            data,
        });
    }
}