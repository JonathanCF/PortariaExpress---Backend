import prismaClient from "../../prisma";

interface CadastroRequest {
  nome: string;
  matricula: string;
  cpf: string;
  placa: string;
  tipo_transporte: string;
  modelo: string;
  empresa_id: number;
}

class CreateCadastroService {
  async execute({
    nome,
    matricula,
    cpf,
    placa,
    tipo_transporte,
    modelo,
    empresa_id,
  }: CadastroRequest) {
    if (nome.length <= 2) {
      throw new Error("Nome inválido!");
    }

    const cpfExist = await prismaClient.cadastro.findFirst({
      where: {
        AND: [
          {
            cpf: cpf,
          },
        ],
      },
    });

    if (cpfExist) {
      throw new Error("CPF já cadastrado");
    }

    if (matricula != "") {
      const matriculaExist = await prismaClient.cadastro.findFirst({
        where: {
          matricula: matricula,
        },
      });

      if (matriculaExist) {
        throw new Error("matricula já cadastrada");
      }
    }

    if (placa !== "") {
      const placaExist = await prismaClient.cadastro.findFirst({
        where: {
          transporte: {
            every: {
              placa: placa,
            },
          },
        },
      });
      if (placaExist) {
        throw new Error("Placa já cadastrada");
      }
    }

    const pessoa = await prismaClient.cadastro.create({
      data: {
        nome: nome,
        cpf: cpf,
        matricula: matricula,
        empresa_id: empresa_id,
        transporte: {
          create: {
            placa: placa,
            tipo_tranporte: tipo_transporte,
            modelo: modelo,
          },
        },
      },
      select: {
        nome: true,
        cpf: true,
        matricula: true,
        empresa: {
          select: {
            empresa: true,
          },
        },
        transporte: {
          select: {
            placa: true,
            tipo_tranporte: true,
            modelo: true,
          },
        },
      },
    });

    return pessoa;
  }
}

export { CreateCadastroService };
