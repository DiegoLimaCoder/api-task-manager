import prismaClient from "../../prisma";

class CreateTaskService {
  async execute() {
    return { ok: true };
  }
}

export { CreateTaskService };
