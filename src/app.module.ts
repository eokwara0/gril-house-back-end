import { CacheModule, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./modules/users/users.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { ConfigModule } from "@nestjs/config";
import { MenuModule } from "./modules/menu/menu.module";
import { OrderModule } from "./modules/order/order.module";
import { TableModule } from "./modules/table/table.module";
import { BillingModule } from "./modules/billing/billing.module";
import { ReportModule } from "./modules/report/report.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

//
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development"],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "public"),
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthenticationModule,
    MenuModule,
    OrderModule,
    TableModule,
    BillingModule,
    ReportModule,
  ],
})
export class AppModule {}
