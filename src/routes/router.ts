import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";
const router = Router();

// Rota users
router.post("/users", new CreateUserController().handle);

export { router };
