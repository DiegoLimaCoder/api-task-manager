import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUser = new AuthUserService();

    // Executa a autenticação do usuário e obtém o usuário autenticado
    const user = await authUser.execute({ email, password });

    return res.json(user);
  }
}

export { AuthUserController };
