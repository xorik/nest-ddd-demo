import { Db } from "src/infrastructure/db";
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService extends Db {}
