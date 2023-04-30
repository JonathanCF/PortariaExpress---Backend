import { Request, Response } from "express";
import { ListarEmpresaService } from '../../services/Empresa/ListarEmpresaService'

class ListarEmpresaController{
	async handle(req: Request, res: Response){

		const listaEmpresaService = new ListarEmpresaService()

		const listaEmpresa = await listaEmpresaService.execute()

		return res.json(listaEmpresa)
	}
}

export { ListarEmpresaController }