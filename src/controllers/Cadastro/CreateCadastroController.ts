import { Request, Response } from "express";
import { CreateCadastroService } from "../../services/Cadastro/CreateCadastroService";

class CreateCadastroController {
  async handle(req: Request, res: Response) {
    const {
      nome,
      matricula,
      cpf,
      placa,
      tipo_transporte,
      modelo,
      empresa_id,
    } = req.body;

    const createCadastroService = new CreateCadastroService();

    const cadastro = await createCadastroService.execute({
      nome,
      matricula,
      cpf,
      placa,
      tipo_transporte,
      modelo,
      empresa_id,
    });
    return res.json(cadastro);
  }
}

export { CreateCadastroController };
