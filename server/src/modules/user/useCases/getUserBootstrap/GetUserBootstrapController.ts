import { GetUserBootstrapUseCase } from "./GetUserBootstrapUseCase";
import { Request, Response } from "express";

export class GetUserBootstrapController {
  async handle(req: Request, res: Response) {
    const id = (req as any).user.id;
    const service = new GetUserBootstrapUseCase();

    try {
      const response = await service.execute(id);

      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
