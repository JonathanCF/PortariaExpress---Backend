import prismaClient from "../../prisma";

class ListarCadastrosService {
	async execute(){
		const listaCadastros = await prismaClient.cadastro.findMany({
			include:{
				empresa:{
					select:{
						empresa:true
					}
				}
			}
		})
		
		return listaCadastros
	}
}

export { ListarCadastrosService }