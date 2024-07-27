import { Request, Response } from "express";
import { CreateTaskService } from "../../services/tasks/CreateTaskService";

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { title, description, completed, priority, dueDate } = req.body;

    const user_id = req.user_id;

    const createTask = new CreateTaskService();

    const task = await createTask.execute({
      title,
      description,
      completed,
      priority,
      dueDate,
      user_id,
    });

    return res.json(task);
  }
}

export { CreateTaskController };
