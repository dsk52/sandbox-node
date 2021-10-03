import type express from "express";

export function Index(res: express.Response) {
  return res.json({
    message: "index",
  });
}
