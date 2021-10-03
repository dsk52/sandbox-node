import type express from "express";

export function BookList(res: express.Response) {
  const books = [];

  return res.json({
    books,
  });
}
