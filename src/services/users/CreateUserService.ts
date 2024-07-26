// Importa o cliente Prisma para interagir com o banco de dados
import prismaClient from "../../prisma";

// Define a interface para a requisição de criação de usuário, contendo nome, email e senha
interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  // Método assíncrono para executar a criação do usuário
  async execute({ name, email, password }: UserRequest) {
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    // Retorna o usuário criado
    return user;
  }
}

export { CreateUserService };
