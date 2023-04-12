import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cache, CacheDocument } from "./model/cache.schema";
import { Model } from "mongoose";

@Injectable()
export class CacheService {
  constructor(
    @InjectModel(Cache.name) private cacheModel: Model<CacheDocument>
  ) {}

  async addCache(key: string, data: any): Promise<any> {
    const cache = new this.cacheModel(new Cache(key, data));
    return cache.save();
  }

  async getCache(key: string): Promise<unknown> {
    const cache = await this.cacheModel.find({ key: key });
    return cache;
  }
}
