import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { comparePassword } from '../helpers/authHelper';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  

  async singIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string, status: string, message: string }> {
    const user = await this.userService.user({ email });
    if (!user) {
      throw new UnauthorizedException('E-mail não encontrado');
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        throw new UnauthorizedException('Senha inválida');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      status: 'success',
      message: 'Login realizado com sucesso!',
    };
  }
}
