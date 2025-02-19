import { IsEmail, IsNotEmpty, IsString, IsDate, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class CreatePhoneDto {
  @IsNotEmpty()
  @IsString()
  areaCode: string;

  @IsNotEmpty()
  @IsString()
  number: string;
}

class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsOptional()
  @IsString()
  complement?: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePhoneDto)
  phone?: CreatePhoneDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address?: CreateAddressDto;
}
