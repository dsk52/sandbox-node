import express from "express";
import compression from "compression";
import { BookList } from "./controllers/BookController";
import { Index } from "./controllers/IndexController";

const app = express();
const port = 3001;

app.use(compression({ level: 9 }));

app.get("/books", BookList);
app.get("/", Index);

app.use((req: express.Request, res: express.Response) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

app.listen(port, () =>
  console.log(`Server is running. listening at http://0.0.0.0:${port}`)
);
