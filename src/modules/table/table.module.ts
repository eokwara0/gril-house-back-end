import { Module } from "@nestjs/common";
import { TableService } from "./services/table.service";
import { TableController } from "./controller/table.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Table, TableSchema } from "./model/table.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Table.name,
        schema: TableSchema,
      },
    ]),
  ],
  providers: [TableService],
  controllers: [TableController],
})
export class TableModule {}
