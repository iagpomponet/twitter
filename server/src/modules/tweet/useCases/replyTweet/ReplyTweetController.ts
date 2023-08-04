import { ReplyTweetUseCase } from "./ReplyTweetUseCase";
import { Request, Response } from "express";

export class ReplyTweetController {
  async handle(req: Request, res: Response) {
    const service = new ReplyTweetUseCase();
    // create new tweet with text coming from request with user id \
    // add new tweet as a replie of existing tweet
    // so i need content, userId and tweetId
    const userId = (req as any).user.id;
    const tweetId = req.params.tweet_id;
    const content = req.body;

    try {
      const response = await service.execute({
        userId,
        tweetId,
        content,
      });

      return res.status(201).json(response);
    } catch (error) {
      throw new Error(error);
    }
  }
}
