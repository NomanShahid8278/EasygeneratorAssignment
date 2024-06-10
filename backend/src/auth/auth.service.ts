import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { User } from './schemas/user.schema';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    // Injecting Model

    @InjectModel(User.name)
    private userModel: Model<User>,

    // For jwt assignment purpose
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { email, name, password } = signUpDto;

    // Hashing Password before saving it to Database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Saving User to Database
    const user = await this.userModel.create({
      email,
      name,
      password: hashedPassword,
    });

    // Assigning token
    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async signIn(signInDto: SignInDto): Promise<{ token: string }> {
    const { email, password } = signInDto;

    // Check for user existence in db
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Email does not exist');
    }

    // Checking Password against same user

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect Password');
    }

    // Assigning token
    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }
}
