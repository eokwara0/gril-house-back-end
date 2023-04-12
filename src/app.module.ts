import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./modules/users/users.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "./domain/cache/cache.module";
import { MenuModule } from './modules/menu/menu.module';
import { OrderModule } from './modules/order/order.module';
import { TableModule } from './modules/table/table.module';
import { BillingModule } from './modules/billing/billing.module';
import { ReportModule } from './modules/report/report.module';

//
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development"],
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthenticationModule,
    CacheModule,
    MenuModule,
    OrderModule,
    TableModule,
    BillingModule,
    ReportModule,
  ],
})
export class AppModule {}
