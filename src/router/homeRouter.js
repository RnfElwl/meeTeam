import express from "express";
import { home } from "../controller/homeController.js";
import UserController from "../controller/userController.js";

const homeRouter = express.Router();
const userController = new UserController();
homeRouter.get("/", home);
homeRouter
  .route("/login")
  .get(userController.getLogin)
  .post(userController.postLogin);
homeRouter
  .route("/join")
  .get(userController.getJoin)
  .post(userController.postJoin);

export default homeRouter;
