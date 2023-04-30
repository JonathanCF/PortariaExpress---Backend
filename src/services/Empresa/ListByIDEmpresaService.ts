import prismaClient from "../../prisma";

interface ListByIDRequest{
	id: number
}

class ListByIDEmpresaService{
	async execute({id}: ListByIDRequest){
	
		const listByID = await prismaClient.empresa.findUnique({
			where:{
				id: id
			},
			select:{
				id: true,
				cnpj:true,
				empresa: true
			}
		})
		return listByID
	}
}

export { ListByIDEmpresaService }