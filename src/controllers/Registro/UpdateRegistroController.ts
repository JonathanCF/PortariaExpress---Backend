import { Request, Response } from "express";
import { UpdateRegistroService } from "../../services/Registro/UpdateRegistroService";

class UpdateRegistroController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const { hora_saida, hora_entrada } = req.body;

    const updateRegistroService = new UpdateRegistroService();

    const updateHora = await updateRegistroService.execute({
      id: id,
      hora_saida: hora_saida,
      hora_entrada
    });
    return res.json(updateHora);
  }
}

export { UpdateRegistroController };
