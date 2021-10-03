import { createConnection } from "typeorm";

export const connection = async () =>
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "book",
    entities: [__dirname + "/../entities/**/*.ts"],
    synchronize: true,
  });
