import dotevn from "dotenv";
import express from "express";
import session from "express-session";
import mysql from "mysql2";
import MySQLStoreCreator from "express-mysql-session";
import homeRouter from "./router/homeRouter.js";
import userRouter from "./router/userRouter.js";
import { localsMiddleware } from "./middleware.js";
// import "./db.js";
dotevn.config();
import bodyParser from "body-parser";
const MySQLStore = MySQLStoreCreator(session);
const app = express();
const options = {
  host: "127.0.0.1",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "test",
};

const connection = mysql.createConnection(options);
const sessionStore = new MySQLStore(
  {
    expiration: 3600000, // 세션 만료 시간 (ms)
    createDatabaseTable: true, // 테이블 자동 생성 여부
  },
  connection
);
const port = process.env.PORT;
app.use(
  session({
    secret: process.env.COOKIE_SECET,
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(localsMiddleware);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views/content");
app.use("/public", express.static("public"));
app.use("/", homeRouter);
app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

export default app;
