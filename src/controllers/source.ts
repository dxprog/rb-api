import * as express from 'express';

import { Controller } from '../lib/controller';
import { RouteMap } from '../interfaces/route';
import { MysqlDb } from '../lib/mysql-db';
import { SourceModel } from '../models/source';

export class SourceController extends Controller {
  public static create(db: MysqlDb): SourceController {
    return new SourceController(db);
  }

  public async getSources(req: express.Request): Promise<any> {
    return await SourceModel.selectAll(this.db);
  }

  public getRouteMap(): RouteMap {
    return {
      'get:/sources': this.getSources.bind(this)
    };
  }
}