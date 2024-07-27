import { Request, Response } from "express";
import { ListAllTaskService } from "../../services/tasks/ListAllTaskService";

class ListAllTaskController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const listAllTask = new ListAllTaskService();

    const tasks = await listAllTask.execute({ user_id });

    return res.json(tasks);
  }
}

export { ListAllTaskController };
