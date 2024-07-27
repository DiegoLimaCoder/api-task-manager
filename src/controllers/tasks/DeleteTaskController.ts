import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/tasks/DeleteTaskService";

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const deleteTask = new DeleteTaskService();
    const tasks = await deleteTask.execute({ id });

    return res.json(tasks);
  }
}

export { DeleteTaskController };
