import prismaClient from "../../prisma";

interface TaskRequest {
  title: string;
  description?: string;
  completed?: boolean;
  priority: "HIGH" | "AVERAGE" | "NORMAL";
  dueDate: Date;
  user_id: string;
}

class CreateTaskService {
  async execute({
    title,
    description,
    completed = false,
    priority,
    dueDate,
    user_id,
  }: TaskRequest) {
    const task = prismaClient.task.create({
      data: {
        title,
        description,
        completed,
        dueDate,
        priority,
        user_id,
      },
    });

    return task;
  }
}

export { CreateTaskService };
