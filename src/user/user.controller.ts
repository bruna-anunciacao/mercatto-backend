import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { hashPassword } from '../helpers/authHelper';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await hashPassword(createUserDto.password);

    await this.userService.createUser(createUserDto);
    return {message: 'Usuário criado com sucesso!', status: "success"};
  }
}

