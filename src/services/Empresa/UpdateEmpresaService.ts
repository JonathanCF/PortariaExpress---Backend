import prismaClient from "../../prisma";

interface UpdateRequest{
	id: number,
	cnpj: string,
	empresa: string
}

class UpdateEmpresaService{
	async execute({id, cnpj, empresa}: UpdateRequest){

		const updateEmpresa = await prismaClient.empresa.update({
			where:{
				id: id
			},
			data:{
				cnpj: cnpj,
				empresa: empresa
			}
		})
		return updateEmpresa
	}

}

export { UpdateEmpresaService }