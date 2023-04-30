import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  name: string;
  password: string;
}

class AuthUserService {
  async execute({ name, password }: AuthRequest) {
    // Verificar se o nome existe
    const user = await prismaClient.user.findFirst({
      where: {
        name: name,
      },
    });

    if (!user) {
      throw new Error("Nome/Senha incorreto");
    }

    // Verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Nome/Senha incorreto");
    }

    // Se deu tudo certo vamos gerar o token para o usuario.

    const token = sign(
      {
        name: user.name,
      },
      process.env.JWT_SCRET,
      {
        subject: String(user.id),
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      token: token,
    };
  }
}

export { AuthUserService };
