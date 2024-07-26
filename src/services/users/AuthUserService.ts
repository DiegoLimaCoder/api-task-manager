import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

// Define a interface para a requisição de autenticação, contendo email e senha
interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Encontra o usuário pelo email fornecido
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    // Verifica se o usuário foi encontrado
    if (!user) {
      throw new Error(
        "Houve um erro com o e-mail que você inseriu. Certifique-se de que está correto."
      );
    }

    // Compara a senha fornecida com a senha armazenada (hash)
    const passwordMath = await compare(password, user.password);

    // Verifica se a senha está correta
    if (!passwordMath) {
      throw new Error("Senha Incorreta.");
    }

    return user;
  }
}

export { AuthUserService };
