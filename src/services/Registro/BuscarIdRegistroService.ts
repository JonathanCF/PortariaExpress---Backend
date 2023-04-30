import prismaClient from "../../prisma";

interface RegistroSaidaRequest {
  id: string;
  
}

class BuscarIdRegistroService {
  async execute({ id }: RegistroSaidaRequest) {
    const registroSaida = await prismaClient.registro.findUnique({
      where: {
        id: id
      },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    });
    return registroSaida;
  }
}

export { BuscarIdRegistroService };
