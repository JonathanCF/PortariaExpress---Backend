import prismaClient from "../../prisma";

class ListarRegistrosService {
  async execute() {
    const listarRegistros = await prismaClient.registro.findMany({
      where: {
        status: false,
      },
      orderBy: {
        data_registro: "asc",
      },
      select: {
        id: true,
        data_registro: true,
        hora_entrada: true,
        hora_saida: true,
        observacao:true,
        cadastros: {
          select: {
            nome: true,
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
          },
        },
      },
    });
    return listarRegistros;
  }
}

export { ListarRegistrosService };
