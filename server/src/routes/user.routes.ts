import * as express from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/AuthenticateUserController";
import { HandleAuth } from "../middleware/auth";
import { GetUserController } from "../modules/user/useCases/getUser/GetUserController";

const router = express.Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getUserController = new GetUserController();

// Create a new user
router.post("/", createUserController.handle);

// User authentication
router.post("/auth", authenticateUserController.handle);

// Get user
router.get("/", HandleAuth, getUserController.handle);

export default router;
