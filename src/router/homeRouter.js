import express from "express";
import { home } from "../controller/homeController.js";
import UserController from "../controller/userController.js";
import SearchController from "../controller/searchController.js";

const homeRouter = express.Router();
const userController = new UserController();
const searchController = new SearchController();

homeRouter.get("/", home);
homeRouter
  .route("/login")
  .get(userController.getLogin)
  .post(userController.postLogin);
homeRouter
  .route("/join")
  .get(userController.getJoin)
  .post(userController.postJoin);
homeRouter.route("/teamSearch").get(searchController.getSearchTeam);

export default homeRouter;
