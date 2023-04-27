import * as express from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";

const router = express.Router();

const createUserController = new CreateUserController();

// Create a new user
router.post("/", createUserController.handle);

export default router;
