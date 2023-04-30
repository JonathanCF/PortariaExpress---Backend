import { Request, Response } from "express";
import { ListByIDEmpresaService } from "../../services/Empresa/ListByIDEmpresaService";

class ListByIDEmpresaController{
	async handle(req: Request, res: Response){

		const id = req.query.id

		const listByIDEmpresaService = new ListByIDEmpresaService()

		const listByID = await listByIDEmpresaService.execute({
			id: Number(id)
		})

		return res.json(listByID)
	}
}

export { ListByIDEmpresaController }