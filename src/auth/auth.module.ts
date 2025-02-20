import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { env } from "process";

@Module({
    imports: [UserModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: env.JWT_EXPIRATION }
    })],
    controllers: [AuthController],
    providers: [AuthService,PrismaService],
    exports: [AuthService]
})
export class AuthModule {}
