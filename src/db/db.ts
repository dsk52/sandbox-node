import path from "path";

import { createConnection } from "typeorm";

export const connection = async () => {
  try {
    return await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "mysql",
      database: "book",
      entities: [path.join(__dirname, "/../entities/**/*.ts")],
      synchronize: true,
    });
  } catch (error) {
    throw new Error("DB connection error");
  }
};
