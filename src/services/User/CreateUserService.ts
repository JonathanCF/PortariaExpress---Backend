import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
  name: string;
  password: string;
}

class CreateUserService {
  async execute({ name, password }: UserRequest) {
    // verificar se ele enviou um nome
    if (!name) {
      throw new Error("Preencha o campo nome");
    }

    // verifica se o nome já está cadastrado na plataforma
    const userAlreadExists = await prismaClient.user.findFirst({
      where: { name: name },
    });
    if (userAlreadExists) {
      throw new Error("User already exists");
    }

	 const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name: name,
        password: passwordHash,
      },
		select:{
			id: true,
			name: true
		}
    });
    return user;
  }
}

export { CreateUserService };
