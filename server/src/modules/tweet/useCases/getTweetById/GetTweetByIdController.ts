import { GetTweetByIdUseCase } from "./GetTweetByIdUseCase";
import { Request, Response } from "express";

export class GetTweetByIdController {
  async handle(req: Request, res: Response) {
    const id = req.params.tweet_id;
    const service = new GetTweetByIdUseCase();

    try {
      const response = await service.execute({ id });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
