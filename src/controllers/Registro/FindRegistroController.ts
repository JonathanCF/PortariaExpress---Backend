import { Request, Response } from "express";
import { FindRegistroService } from '../../services/Registro/FindRegistroService'

class FindRegistroController{
	async handle(req: Request, res: Response) {

		const data_inicio = req.query.data_inicio as string
		const data_fim = req.query.data_fim as string
		
		const findRegistroService = new FindRegistroService()

		const listaEntrada = await findRegistroService.execute({
			data_inicio,
			data_fim
		})

		return res.json(listaEntrada)
	}
}

export { FindRegistroController }