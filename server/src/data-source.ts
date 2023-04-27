import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 15432,
  username: "postgres",
  password: "Postgres2019!",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});
