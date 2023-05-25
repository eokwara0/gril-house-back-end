import { Test, TestingModule } from "@nestjs/testing";
import { TableService } from "./table.service";
import { Table, TableSchema } from "../model/table.model";
import mongoose from "mongoose";
import { getModelToken } from "@nestjs/mongoose";

describe("TableService", () => {
  let service: TableService;

  beforeEach(async () => {
    const model = mongoose.model("table", TableSchema);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TableService,
        { provide: getModelToken(Table.name), useValue: model },
      ],
    }).compile();

    service = module.get<TableService>(TableService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
