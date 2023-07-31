import { AppDataSource } from "../../../../data-source";

interface LikeTweetProps {
  tweetId: string;
  userId: string;
}

export class LikeTweetUseCase {
  async execute({ tweetId, userId }: LikeTweetProps) {
    const repo = AppDataSource.getRepository("Tweet");
    const tweet = await repo.findOne({ where: { id: tweetId } });

    // check if user already liked it
    // const hasLiked = tweet.likes.includes(userId);
    let likes = tweet.likes ? JSON.parse(tweet.likes) : [];

    if (likes.includes(userId)) {
      likes = likes.filter((like) => like !== userId);
    } else {
      likes.push(userId);
    }

    tweet.likes = JSON.stringify(likes);

    const updatedTweet = await repo.save(tweet);
    return updatedTweet;
  }
}
