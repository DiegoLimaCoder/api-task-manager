import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body; // Extrai os dados da requisição

    const createUser = new CreateUserService(); // Instancia o serviço de criação de usuário

    const user = await createUser.execute({ name, email, password }); // Cria o usuário com os dados fornecidos

    return res.json(user);
  }
}

export { CreateUserController };
