import { Request, Response } from "express";
import { CreateEmpresaService } from "../../services/Empresa/CreateEmpresaService";

class CreateEmpresaController {
  async handle(req: Request, res: Response) {
    const { empresa, cnpj } = req.body

    const createEmpresaService = new CreateEmpresaService();

    const empresaService = await createEmpresaService.execute({
      empresa,
      cnpj
    });

    return res.json(empresaService);
  }
}

export { CreateEmpresaController };
