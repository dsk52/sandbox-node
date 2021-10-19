import { DBConnection } from "../db/db";
import { Book } from "../entity/Book";

import type { Request, Response } from "express";

export async function BookList(req: Request, res: Response) {
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

interface DetailRequest extends Request {
  query: {
    bookId: string | undefined;
  };
}

export async function BookDetail(req: DetailRequest, res: Response) {
  let book = null;

  const { bookId } = req.query;
  if (!bookId) {
    return res.status(400).json({
      book,
    });
  }

  try {
    const connection = await DBConnection();
    const BookRepository = await connection.getRepository(Book);

    book = await BookRepository.findOne({ id: parseInt(bookId, 10) });
  } catch (error) {
    console.error(error);
  }

  if (!book) {
    return res.status(404).json({
      book,
    });
  }

  return res.json({
    book,
  });
}
