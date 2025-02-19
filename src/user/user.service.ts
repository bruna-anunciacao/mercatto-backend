import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        fullname: data.fullname,
        email: data.email,
        cpf: data.cpf,
        birthdate: data.birthdate,
        password: data.password,
        phone: data.phone
          ? { create: { areaCode: data.phone.areaCode, number: data.phone.number } }
          : undefined,
        address: data.address
          ? {
              create: {
                zipCode: data.address.zipCode,
                state: data.address.state,
                city: data.address.city,
                neighborhood: data.address.neighborhood,
                street: data.address.street,
                number: data.address.number,
                complement: data.address.complement,
              },
            }
          : undefined,
      },
      include: { phone: true, address: true },
    });
  }
}
