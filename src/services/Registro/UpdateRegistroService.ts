import prismaClient from "../../prisma";

interface UpdateRequest{
	id: string
	hora_saida: string
	hora_entrada: string
}

class UpdateRegistroService{
	async execute({ id, hora_saida, hora_entrada }: UpdateRequest){
		const updateHora = await prismaClient.registro.update({
			where: {
				id: String(id),
			},
			data:{
				status: true,
				hora_saida: hora_saida,
				hora_entrada: hora_entrada 
			}
		})
		return updateHora
	}
}

export { UpdateRegistroService }