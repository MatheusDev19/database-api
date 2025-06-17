import { Router } from "express";
import { UserController } from "../Controllers/User.controller";

export const userRouters = Router();

userRouters.post('/', UserController.createUser);