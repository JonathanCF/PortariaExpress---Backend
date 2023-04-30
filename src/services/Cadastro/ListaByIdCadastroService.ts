import prismaClient from "../../prisma";

interface IdRequest{
	id: number
}

class ListaByIdCadastroService {
	async execute({id}: IdRequest){
		const listaById = await prismaClient.cadastro.findUnique({
			where: {
				id:id,
			},
			include:{
				empresa:{
					select:{
						empresa:true,
					},
				},
				transporte:{
					select:{
						placa:true,
						modelo:true,
						tipo_tranporte:true
					},
				},
			},
		})
		return listaById
	}
}

export { ListaByIdCadastroService }