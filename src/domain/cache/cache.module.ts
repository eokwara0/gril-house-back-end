import { Module } from "@nestjs/common";
import { CacheService } from "./cache.service";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { CacheSchema, Cache } from "./model/cache.schema";

@Module({
  providers: [CacheService],
  imports: [
    JwtService,
    MongooseModule.forFeature([
      {
        name: Cache.name,
        schema: CacheSchema,
      },
    ]),
  ],
})
export class CacheModule {}
