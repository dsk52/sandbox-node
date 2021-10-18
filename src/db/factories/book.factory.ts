import * as Faker from "faker/locale/ja";
import { define } from "typeorm-seeding";

import { Book } from "../../entity/Book";

define(Book, (faker: typeof Faker) => {
  const book = new Book();
  book.title = "本のタイトル";
  book.publishDate = new Date();

  return book;
});

export default Book;
