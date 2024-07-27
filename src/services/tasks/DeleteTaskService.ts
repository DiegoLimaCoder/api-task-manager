import prismaClient from "../../prisma";

interface TaskRequest {
  id: string;
}

class DeleteTaskService {
  async execute({ id }: TaskRequest) {
    const taskAlreadyExist = await prismaClient.task.findFirst({
      where: {
        id: id,
      },
    });

    if (!taskAlreadyExist) {
      throw new Error("ops....Tarefa não existe");
    }

    const tasks = await prismaClient.task.delete({
      where: {
        id: id,
      },
      select: {
        title: true,
      },
    });

    return tasks;
  }
}

export { DeleteTaskService };
