import prismaClient from "../../prisma";

interface FindRequest {
  data_inicio: string;
  data_fim: string;
}

class FindRegistroService {
  async execute({ data_inicio, data_fim }: FindRequest) {
    if (!data_inicio && !data_fim) {
      throw new Error("Campo de pesquisa inválido");
    }

    const listaEntrada = await prismaClient.registro.findMany({
      orderBy: {
        cadastro_id: "asc",
      },
      where: {
        status: true,
        data_registro: {
          gte: data_inicio,
          lte: data_fim,
        },
      },
      include: {
        cadastros: {
          select: {
            nome: true,
            matricula: true,
            empresa: {
              select: {
                empresa: true,
              },
            },
            transporte: {
              select: {
                placa: true,
                modelo: true,
                tipo_tranporte: true,
              },
            },
            registros: {
              select: {
                hora_entrada: true,
                hora_saida: true,
              },
            },
          },
        },
      },
    });

    if (listaEntrada.length === 0) {
      throw new Error("Relatório entrada vazio!!");
    }

    return listaEntrada;
  }
}

export { FindRegistroService };
