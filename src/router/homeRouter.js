import express from "express";
import { home } from "../controller/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/", home);

export { homeRouter };
