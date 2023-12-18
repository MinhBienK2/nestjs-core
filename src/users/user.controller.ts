import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    @Inject('VALUE_PROVIDER') private valueProvider,
    @Inject('FACTORY_PROVIDER') private factoryProvider,
  ) {}

  //@UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto) {
    const userReal = plainToClass(UserDto, user, {
      excludeExtraneousValues: true,
    });
    console.log(userReal);
    return user;
  }

  @Get()
  getAllUser() {
    const data = this.userService.getUser();
    return data;
  }

  @Get('value-provider')
  getValueProvider() {
    const data = this.userService.getValueProvider();
    return {
      data,
    };
  }

  @Get('factory-provider')
  getFactoryProvider() {
    return this.factoryProvider;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const hello: UserDto = {
      username: '123',
      password: 123,
    };
    console.log(hello);
    return 'test';
  }
}
