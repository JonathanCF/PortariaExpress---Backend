import prismaClient from "../../prisma";

interface RegistroRequest {
  hora_entrada: string;
  hora_saida: string;
  data_registro: string;
  cadastro_id: number;
  observacao: string
}

class CreateRegistroService {
  async execute({
    hora_entrada,
    hora_saida,
    data_registro,
    cadastro_id,
    observacao,
  }: RegistroRequest) {


      const registroExist = await prismaClient.registro.findFirst({
        where: {
          AND: [
            {
              data_registro: data_registro,
              cadastro_id: cadastro_id,
              status: false
            }, 

          ],
        },
      });

      if (registroExist) {
        throw new Error("Entrada ou Saída já registrada");
      }


    const registro = await prismaClient.registro.create({
      data: {
        hora_entrada: hora_entrada,
        hora_saida: hora_saida,
        data_registro: data_registro,
        cadastro_id: cadastro_id,
        observacao: observacao
      },
    });
    return registro;
  }
}

export { CreateRegistroService };
