import { Request, Response } from "express";
import { UpdateTaskService } from "../../services/tasks/UpdateTaskService";

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const { title, description, completed, priority, dueDate } = req.body;
    const updateTaskService = new UpdateTaskService();

    const updatedTask = await updateTaskService.execute({
      id,
      title,
      description,
      completed,
      priority,
      dueDate,
    });

    return res.json(updatedTask);
  }
}

export { UpdateTaskController };
