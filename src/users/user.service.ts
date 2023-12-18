import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@Inject('VALUE_PROVIDER') private valueProvider) {}

  getUser() {
    return {
      hello: 'hello123',
    };
  }

  getValueProvider() {
    return this.valueProvider;
  }
}
