


async function addTables() {
  const tables = [
    {
      status: "RESERVED",
      capacity: 2,
      createdAt: ISODate("2023-05-10T10:50:00.725Z"),
      updatedAt: ISODate("2023-05-10T11:05:48.756Z"),
    },
    {
      status: "AVAILABLE",
      capacity: 3,
      createdAt: ISODate("2023-05-10T10:50:07.497Z"),
      updatedAt: ISODate("2023-05-10T10:50:07.497Z"),
    },
    {
      status: "AVAILABLE",
      capacity: 4,
      createdAt: ISODate("2023-05-10T10:50:13.354Z"),
      updatedAt: ISODate("2023-05-10T10:50:13.354Z"),
    },
    {
      _id: "645b76ea2014aac5b4aeae7d",
      status: "AVAILABLE",
      capacity: 3,
      createdAt: ISODate("2023-05-10T10:50:18.618Z"),
      updatedAt: ISODate("2023-05-10T10:50:18.618Z"),
    },
    {
      _id: "645b76ee2014aac5b4aeae7f",
      status: "AVAILABLE",
      capacity: 2,
      createdAt: ISODate("2023-05-10T10:50:22.834Z"),
      updatedAt: ISODate("2023-05-10T10:50:22.834Z"),
    },
    {
      _id: "645b76f32014aac5b4aeae81",
      status: "AVAILABLE",
      capacity: 5,
      createdAt: ISODate("2023-05-10T10:50:27.042Z"),
      updatedAt: ISODate("2023-05-10T10:50:27.042Z"),
    },
    {
      _id: "645b76f82014aac5b4aeae83",
      status: "AVAILABLE",
      capacity: 4,
      createdAt: ISODate("2023-05-10T10:50:32.383Z"),
      updatedAt: ISODate("2023-05-10T10:50:32.383Z"),
    },
    {
      _id: "645b76fe2014aac5b4aeae85",
      status: "AVAILABLE",
      capacity: 3,
      createdAt: ISODate("2023-05-10T10:50:38.251Z"),
      updatedAt: ISODate("2023-05-10T10:50:38.251Z"),
    },
  ];
  
  db.tables.insertMany(tables);
}

addTables();