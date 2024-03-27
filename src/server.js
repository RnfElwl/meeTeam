import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.get("/", (req, res) => res.render("content/home.pug"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

export default app;
