import { Request, Response } from "express";
import { UpdateEmpresaService } from "../../services/Empresa/UpdateEmpresaService";

class UpdateEmpresaController{
	async handle(req: Request, res: Response){

		const id = req.query.id
		const { empresa, cnpj } = req.body

		const updateEmpresaService = new UpdateEmpresaService()

		const updateEmpresa = await updateEmpresaService.execute({
			id: Number(id),
			empresa: empresa,
			cnpj: cnpj
		})
		return res.json(updateEmpresa)
	}
}

export { UpdateEmpresaController }