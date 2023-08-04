import { AppDataSource } from "../../../../data-source";
import { CreateTweetUseCase } from "../createTweet/CreateTweetUseCase";

interface ReplyTweetProps {
  userId: string;
  tweetId: string;
  content: string;
}

export class ReplyTweetUseCase {
  async execute({ content, userId, tweetId }: ReplyTweetProps) {
    const repo = AppDataSource.getRepository("Tweet");

    const tweet = repo.create({
      text: content,
      createdAt: new Date(),
      user: userId,
      replyToTweet: tweetId,
    });

    await repo.save(tweet);

    return tweet;
  }
}
