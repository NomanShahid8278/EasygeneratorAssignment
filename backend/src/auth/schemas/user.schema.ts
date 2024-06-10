import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  // Three Fields as per requirement
  @Prop({ unique: [true, 'Email already exist'] })
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
