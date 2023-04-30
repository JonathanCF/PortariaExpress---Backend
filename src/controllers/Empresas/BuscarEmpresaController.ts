import { Request, Response } from "express";
import { BuscarEmpresaService } from "../../services/Empresa/BuscarEmpresaService";

class BuscarEmpresaController{
	async handle(req: Request, res: Response){
		const search = req.query.search as string

		const buscarEmpresaService = new BuscarEmpresaService()

		const buscarEmpresa = await buscarEmpresaService.execute({
			search: search
		})
		res.json(buscarEmpresa)
	}
}

export { BuscarEmpresaController }