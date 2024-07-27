import { Request, Response } from "express";
import { CreateTaskService } from "../../services/tasks/CreateTaskService";

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const createTask = new CreateTaskService();

    const task = await createTask.execute();

    return res.json(task);
  }
}

export { CreateTaskController };
