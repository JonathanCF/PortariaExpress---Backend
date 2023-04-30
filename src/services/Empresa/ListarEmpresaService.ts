import prismaClient from '../../prisma'

class ListarEmpresaService{
	async execute(){
		const listaEmpresa = await prismaClient.empresa.findMany({
			orderBy:{
				empresa: 'asc'
			},
			select:{
				id: true,
				empresa: true,
				cnpj: true
			}
		})

		return listaEmpresa
	}
	
}

export { ListarEmpresaService }