import type express from "express";

export function Index(req: express.Request, res: express.Response) {
  return res.json({
    message: "index",
  });
}
