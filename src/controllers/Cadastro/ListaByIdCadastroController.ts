import { Request, Response } from "express";
import { ListaByIdCadastroService } from "../../services/Cadastro/ListaByIdCadastroService";

class ListaByIdCadastroController{
	async handle(req: Request, res: Response){

		const id = req.query.id

		const listaByIdCadastroService = new ListaByIdCadastroService()

		const listaById = await listaByIdCadastroService.execute({
			id: Number(id)
		})
		return res.json(listaById)
	}
}

export { ListaByIdCadastroController }