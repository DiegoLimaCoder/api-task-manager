import prismaClient from "../../prisma";

interface TaskRequest {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: "HIGH" | "AVERAGE" | "NORMAL";
  dueDate?: Date;
}

class UpdateTaskService {
  async execute({
    id,
    title,
    description,
    completed,
    priority,
    dueDate,
  }: TaskRequest) {
    const taskAlreadyExist = await prismaClient.task.findUnique({
      where: {
        id: id,
      },
    });

    if (!taskAlreadyExist) {
      throw new Error("Tarefa não encontrada");
    }

    const task = await prismaClient.task.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        completed: completed,
        priority: priority,
        dueDate: dueDate,
      },
      select: {
        title: true,
        description: true,
        completed: true,
        priority: true,
        dueDate: true,
      },
    });

    return task;
  }
}

export { UpdateTaskService };
