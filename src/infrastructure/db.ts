import { DbInterface } from "src/domain/db.interface";

export class Db implements DbInterface {
  public get(): string {
    return 'hello from DB'
  }
}
