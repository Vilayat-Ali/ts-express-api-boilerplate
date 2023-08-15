// lib
import consola from "consola";
import { DataSource } from "typeorm";

// env
import { ENV } from "../server";

// entities

export class DB {
  private dataSource!: DataSource;

  constructor() {
    try {
      this.dataSource = new DataSource({
        type: "postgres",
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        username: ENV.DB_USERNAME,
        password: ENV.DB_PASSWORD,
        database: ENV.DB_DATABASE_NAME,
        entities: [
          // entities
        ],
        synchronize: true,
        logging: false,
      });
      this.dataSource.initialize();
      consola.success("Connected to DB");
    } catch (err: any) {
      consola.error(err?.message);
    }
  }

  // getter
  public getDataSource(): DataSource {
    return this.dataSource;
  }

  // setter
  public setDataSource(source: DataSource) {
    this.dataSource = source;
  }
}
