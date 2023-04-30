import { Request, Response } from "express";
import { ListarRegistrosService } from "../../services/Registro/ListarRegistrosService";

class ListarRegistrosController{
	async handle(req: Request, res: Response){

		const listarRegistrosService = new ListarRegistrosService()

		const listaRegistros = await listarRegistrosService.execute()
		
		return res.json(listaRegistros)
	}
}

export { ListarRegistrosController }