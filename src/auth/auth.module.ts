import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [
    UserModule,
    StoreModule.register({ root: 'store', path: 'auth.json' }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: AuthService,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
