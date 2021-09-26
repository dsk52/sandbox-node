import * as express from "express";

export function BookList(req: express.Request, res: express.Response) {
  const books = [];

  return res.json({
    'books': books
  })
}
