import { ConnectionOptions } from "typeorm-seeding";

const Config: ConnectionOptions = {
  type: "mysql",
  host: "0.0.0.0",
  port: 3306,
  username: "root",
  password: "mysql",
  database: "book",
  synchronize: false,
  logging: false,
  maxQueryExecutionTime: 100,
  entities:
    process.env.NODE_ENV === "test"
      ? ["src/entity/**/*.ts"]
      : ["build/entity/**/*.js"],
  migrations:
    process.env.NODE_ENV === "test"
      ? ["src/db/migration/**/*.ts"]
      : ["build/db/migration/**/*.js"],
  // subscribers: ["build/subscriber/**/*.{js,ts}"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/db/migration",
    subscribersDir: "src/subscriber",
  },
  seeds: ["src/db/seeders/**/*.ts"],
  factories: ["src/db/factories/**/*.ts"],
};

export default Config;
