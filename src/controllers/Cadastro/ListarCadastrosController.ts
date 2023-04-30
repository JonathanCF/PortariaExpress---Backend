import { Request, Response } from "express";
import { ListarCadastrosService } from "../../services/Cadastro/ListarCadastrosService";

class ListarCadastrosController {
	async handle(req: Request, res: Response){

		const listarCadastroService = new ListarCadastrosService()

		const listaCadastros = await listarCadastroService.execute()

		return res.json(listaCadastros)
	}
}

export { ListarCadastrosController }