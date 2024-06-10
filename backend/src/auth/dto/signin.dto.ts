import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Enter valid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
