import express from "express";
import { home } from "../controller/homeController.js";
import {
  getLogin,
  postLogin,
  getJoin,
  postJoin,
} from "../controller/userController.js";

const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.route("/login").get(getLogin).post(postLogin);
homeRouter.route("/join").get(getJoin).post(postJoin);
export { homeRouter };
