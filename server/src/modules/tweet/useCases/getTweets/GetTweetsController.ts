import { GetTweetsUseCase } from "./GetTweetsUseCase";
import { Request, Response } from "express";

export class GetTweetsController {
  async handle(req: Request, res: Response) {
    const service = new GetTweetsUseCase();

    try {
      const response = await service.execute({ userId: "" });
      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).json({ err });
    }
  }
}
