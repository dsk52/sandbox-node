import { ConnectionOptions } from "typeorm-seeding";

const DBConfig: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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

export default DBConfig;
