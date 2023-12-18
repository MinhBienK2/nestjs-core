import * as fs from 'fs';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_OPTION') private option: { root: string; path: string },
  ) {
    if (!fs.existsSync(this.option.root)) {
      fs.mkdirSync(this.option.root);
    }
  }

  save(data: any) {
    try {
      fs.appendFileSync(
        `${this.option.root}/${this.option.path}`,
        JSON.stringify(data),
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
