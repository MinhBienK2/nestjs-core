import { Expose } from 'class-transformer';
import { IsStrongPassword, Length, MinLength } from 'class-validator';

export class UserDto {
  @Length(10, 20)
  @Expose()
  username: string;

  @IsStrongPassword({ minLength: 5, minUppercase: 1 })
  @Expose()
  password: number;
}
