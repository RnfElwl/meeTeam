import express from "express";
import { homeRouter } from "./router/homeRouter.js";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views/content");
app.use("/public", express.static("public"));

app.use("/", homeRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

export default app;
