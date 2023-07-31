import * as express from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/AuthenticateUserController";
import { HandleAuth } from "../middleware/auth";
import { GetUserController } from "../modules/user/useCases/getUser/GetUserController";
import { GetUserBootstrapController } from "../modules/user/useCases/getUserBootstrap/GetUserBootstrapController";

const router = express.Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getUserController = new GetUserController();
const getUserBootstrapController = new GetUserBootstrapController();
// Create a new user
router.post("/", createUserController.handle);

// User authentication
router.post("/auth", authenticateUserController.handle);

// Get user
router.get("/", HandleAuth, getUserController.handle);

// Bootstrap
router.get("/bootstrap", HandleAuth, getUserBootstrapController.handle);

export default router;
