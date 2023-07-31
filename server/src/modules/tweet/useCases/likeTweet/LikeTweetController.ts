import { LikeTweetUseCase } from "./LikeTweetUseCase";
import { Request, Response } from "express";

export class LikeTweetController {
  async handle(req: Request, res: Response) {
    const tweetId = req?.params.tweet_id;
    const service = new LikeTweetUseCase();

    if (tweetId) {
      const userId = (req as any).user.id;
      const response = await service.execute({ tweetId, userId });
      return res.status(201).json(response);
    }
  }
}
