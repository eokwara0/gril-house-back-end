


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
      status: "AVAILABLE",
      capacity: 3,
      createdAt: ISODate("2023-05-10T10:50:18.618Z"),
      updatedAt: ISODate("2023-05-10T10:50:18.618Z"),
    },
    {
      status: "AVAILABLE",
      capacity: 2,
      createdAt: ISODate("2023-05-10T10:50:22.834Z"),
      updatedAt: ISODate("2023-05-10T10:50:22.834Z"),
    },
    {
      status: "AVAILABLE",
      capacity: 5,
      createdAt: ISODate("2023-05-10T10:50:27.042Z"),
      updatedAt: ISODate("2023-05-10T10:50:27.042Z"),
    },
    {
      status: "AVAILABLE",
      capacity: 4,
      createdAt: ISODate("2023-05-10T10:50:32.383Z"),
      updatedAt: ISODate("2023-05-10T10:50:32.383Z"),
    },
    {
      status: "AVAILABLE",
      capacity: 3,
      createdAt: ISODate("2023-05-10T10:50:38.251Z"),
      updatedAt: ISODate("2023-05-10T10:50:38.251Z"),
    },
  ];
  
  db.tables.insertMany(tables);
}

addTables();