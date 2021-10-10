import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

import Book from "../factories/book.factory";

export default class CreateBook implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  public async run(factory: Factory, connection: Connection) {
    await factory(Book)().create();
  }
}
