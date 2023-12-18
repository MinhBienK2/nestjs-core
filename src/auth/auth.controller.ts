import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';
import { UserService } from 'src/users/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private storeService: StoreService,
  ) {}

  @Get()
  testImportUserService() {
    const data = this.userService.getUser();

    return {
      status: 200,
      data,
    };
  }

  @Post()
  appendToFile(@Body() body: { username: string; age: number }) {
    console.log(body);
    this.storeService.save(body);

    return {
      status: 200,
      data: body,
    };
  }
}
