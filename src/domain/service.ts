import { DbInterface } from './db.interface'

export class Service {
  constructor(private db: DbInterface) {}

  getHello(): string {
    return this.db.get();
  }
}
