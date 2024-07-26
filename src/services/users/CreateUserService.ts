// Importa o cliente Prisma para interagir com o banco de dados
import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

// Define a interface para a requisição de criação de usuário, contendo nome, email e senha
interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  // Método assíncrono para executar a criação do usuário
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error(
        "Oops! Parece que o formato do e-mail não está correto. Certifique-se de digitar um endereço de e-mail válido. "
      );
    }

    // Verifica se o email já está em uso
    const emailAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (emailAlreadyExist) {
      throw new Error(
        "Ops! Parece que esse e-mail já está em uso. Por favor, escolha outro ou faça login com sua conta existente."
      );
    }

    // Faz o hash da senha antes de salvar no banco de dados
    const passwordHash = await hash(password, 8);

    // Cria um novo usuário no banco de dados
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
