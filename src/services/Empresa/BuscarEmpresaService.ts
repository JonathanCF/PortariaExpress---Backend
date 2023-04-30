import prismaClient from "../../prisma";

interface searchRequest{
	search: string
}

class BuscarEmpresaService{
	async execute({search}: searchRequest){

		const buscarEmpresa = await prismaClient.empresa.findMany({
			where:{
				empresa:{
					contains: search,
					mode: "insensitive"
				}
			}
		})
		return buscarEmpresa
	}
}

export { BuscarEmpresaService }