import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMockService } from './user.mock.service';

const valueProvider = {
  name: 'bien ne',
  age: 18,
};

const factoryProvider = (optional) => {
  return optional;
};

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    // class provider
    {
      provide: 'MOCK_CLASS',
      useClass: UserMockService,
    },
    {
      provide: 'VALUE_PROVIDER',
      useValue: valueProvider,
    },
    {
      provide: 'FACTORY_PROVIDER',
      useFactory: factoryProvider,
      inject: [
        {
          token: 'VALUE_PROVIDER',
          optional: true,
        },
      ],
    },
  ],
  exports: [UserService],
})
export class UserModule {}
