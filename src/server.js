import express from "express";
import homeRouter from "./router/homeRouter.js";
// import "./db.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views/content");
app.use("/public", express.static("public"));

app.use("/", homeRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

export default app;
