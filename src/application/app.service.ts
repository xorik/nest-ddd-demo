import { Injectable } from '@nestjs/common';
import { Service } from 'src/domain/service';
import { DbService } from './db.service';

@Injectable()
export class AppService extends Service {
  constructor(db: DbService) {
    super(db);
  }
}
