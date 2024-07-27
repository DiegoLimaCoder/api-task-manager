import prismaClient from "../../prisma";

interface TaskRequest {
  user_id: string;
}

class ListAllTaskService {
  async execute({ user_id }: TaskRequest) {
    const tasks = await prismaClient.task.findMany({
      where: {
        user_id: user_id,
      },
      select: {
        title: true,
        description: true,
        completed: true,
        priority: true,
        dueDate: true,
      },
      orderBy: {
        priority: "asc",
      },
    });

    return tasks;
  }
}

export { ListAllTaskService };
