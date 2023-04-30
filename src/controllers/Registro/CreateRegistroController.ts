import { Request, Response } from "express";
import { CreateRegistroService } from "../../services/Registro/CreateRegistroService";

class CreateRegistroController {
  async handle(req: Request, res: Response) {
    const { hora_entrada, hora_saida, data_registro, cadastro_id, observacao } = req.body;

    const createRegistroService = new CreateRegistroService();

    const registro = await createRegistroService.execute({
      hora_entrada,
      hora_saida,
      data_registro,
      cadastro_id,
      observacao
    });

    res.json(registro);
  }
}

export { CreateRegistroController };
