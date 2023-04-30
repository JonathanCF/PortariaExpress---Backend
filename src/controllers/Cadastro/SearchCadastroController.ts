import { Request, Response } from "express";
import { SearchCadastroService } from '../../services/Cadastro/SearchCadastroService'

class SearchCadastroController{
	async handle(req: Request, res: Response){
		const search  = req.query.search as string

		const searchCadastroService = new SearchCadastroService()

		const result = await searchCadastroService.execute({
			search
		})

		return res.json(result)
	}
}

export { SearchCadastroController }