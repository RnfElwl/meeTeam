import express from "express";
import User from "../controller/userController.js";

const userRouter = express.Router();
const userController = new User();

userRouter.post("/logout", userController.logout);

export default userRouter;
