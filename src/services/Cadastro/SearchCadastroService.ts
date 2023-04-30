import prismaClient from "../../prisma";

interface SearcheRequest {
  search: string;
}

class SearchCadastroService {
  async execute({ search }: SearcheRequest) {
    const buscaNome = await prismaClient.cadastro.findMany({
      where: {
        OR: [
          {
            nome: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            matricula: search,
          },
          {
            transporte: {
              every: {
                placa: search,
              },
            },
          },
			 {
				empresa:{
					empresa:{
						contains: search,
						mode: "insensitive"
					}
				}
			 }
        ],
      },
      include: {
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
    return buscaNome;
  }
}

export { SearchCadastroService };
