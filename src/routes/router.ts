import { Router } from "express";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { AuthUserController } from "../controllers/users/AuthUserController";
import { CreateTaskController } from "../controllers/tasks/CreateTaskController";
import { ListAllTaskController } from "../controllers/tasks/ListAllTaskController";
import { UpdateTaskController } from "../controllers/tasks/UpdateTaskController";
import { DeleteTaskController } from "../controllers/tasks/DeleteTaskController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

// Rota users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

// Rota Tasks
router.post("/tasks", isAuthenticated, new CreateTaskController().handle);
router.get("/tasks/list", isAuthenticated, new ListAllTaskController().handle);
router.put("/tasks/edit", isAuthenticated, new UpdateTaskController().handle);
router.delete(
  "/tasks/delete",
  isAuthenticated,
  new DeleteTaskController().handle
);

export { router };
