import { Test, TestingModule } from "@nestjs/testing";
import { TableController } from "./table.controller";
import { TableService } from "../services/table.service";
import mongoose from "mongoose";
import { Table, TableSchema } from "../model/table.model";
import { getModelToken } from "@nestjs/mongoose";

describe("TableController", () => {
  let controller: TableController;

  beforeEach(async () => {
    const model = mongoose.model("table", TableSchema);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableController],
      providers: [
        TableService,
        { provide: getModelToken(Table.name), useValue: model },
      ],
    }).compile();

    controller = module.get<TableController>(TableController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
