import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';

@Module({})
export class StoreModule {
  static register(option: { root: string; path: string }): DynamicModule {
    return {
      module: StoreModule,
      providers: [StoreService, { provide: 'STORE_OPTION', useValue: option }],
      exports: [StoreService],
    };
  }
}
