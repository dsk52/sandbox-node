import { DBConnection } from "../db/db";
import { Book } from "../entity/Book";

import type express from "express";

export async function BookList(req: express.Request, res: express.Response) {
  let books = [];

  try {
    const connection = await DBConnection();
    const BookRepository = await connection.getRepository(Book);

    books = await BookRepository.find({
      take: 10,
    });

    await connection.close();
  } catch (error) {
    console.error(error);
  }

  if (books.length) {
    return res.json({
      books,
    });
  }
  return res.json({
    books,
  });
}
