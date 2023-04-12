import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ICache } from "./cache.model";
import mongoose, { HydratedDocument } from "mongoose";

@Schema({
  _id: true,
  id: true,
  minimize: true,
  versionKey: false,
  timestamps: true,
})
export class Cache implements ICache {
  // data property
  @Prop({
    required: true,
    name: "Cache Data",
    type: mongoose.Schema.Types.String,
  })
  private readonly _data?: unknown;

  // key property
  @Prop({
    required: true,
    name: "Cache Key",
    type: mongoose.Schema.Types.String,
    unique: true,
    index: true,
  })
  private readonly _key: string;

  constructor(data: unknown, key: string) {
    // cache data
    this._data = data;
    this._key = key;
  }

  /**
   * returns cache key
   */
  public get key(): string {
    return this._key;
  }

  /**
   * retrieve data from cache object
   */
  public get data(): any {
    return this._data;
  }

  /**
   * Validates whether two Cache objects are equal
   * @param other
   * @returns boolean
   */
  equal(other: ICache): boolean {
    if (other.data === this._data) {
      return true;
    } else if (other.key === this._key) {
      return true;
    }
    return false;
  }
}

export type CacheDocument = HydratedDocument<Cache>;
export const CacheSchema = SchemaFactory.createForClass(Cache);
