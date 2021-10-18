import { createConnection } from "typeorm-seeding";

import DBConfig from "../../ormconfig";

export const DBConnection = async () => {
  try {
    return await createConnection(DBConfig);
  } catch (error) {
    console.error(error);

    throw new Error("DB connection error");
  }
};
