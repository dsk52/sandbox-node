import compression from "compression";
import express from "express";

import Logger from "./libs/logger";

import { BookList } from "./controllers/BookController";
import { Index } from "./controllers/IndexController";

const app = express();
const port = 3001;

app.use(compression({ level: 9 }));

app.get("/books", BookList);
app.get("/", Index);

app.use((req: express.Request, res: express.Response) =>
  res.status(404).json({
    message: "Not Found",
  })
);

app.listen(port, () =>
  // eslint-disable-next-line no-console
  Logger.info(`Server is running. listening at http://0.0.0.0:${port}`)
);
