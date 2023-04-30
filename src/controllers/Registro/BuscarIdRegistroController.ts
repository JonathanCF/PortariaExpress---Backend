import { Request, Response } from "express";
import { BuscarIdRegistroService } from '../../services/Registro/BuscarIdRegistroService'

class BuscarIdRegistroController{
	async handle(req: Request, res: Response){

		const id  = req.query.id as string 
		
		const registrarSaidaService = new BuscarIdRegistroService()

		const registrar = await registrarSaidaService.execute({
			id
		})

		return res.json(registrar)
	}
}

export { BuscarIdRegistroController }