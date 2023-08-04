import { AppDataSource } from "../../../../data-source";

interface GetTweetsProps {
  id: string;
}

export class GetTweetByIdUseCase {
  async execute({ id }: GetTweetsProps) {
    const repo = AppDataSource.getRepository("Tweet");

    try {
      const tweets = await repo.find({
        where: {
          id,
        },
        order: {
          createdAt: "DESC",
        },
        relations: ["user", "replies.user", "replyToTweet", "replies"],
        select: {
          replies: {
            id: true,
            user: {
              profilePic: true,
              fullName: true,
            },
            createdAt: true,
            likes: true,
          },
          replyToTweet: {
            id: true,
          },
          user: {
            username: true,
            fullName: true,
            profilePic: true,
          },
        },
      });

      if (!tweets.length) {
        throw new Error("No tweet found");
      }

      return tweets[0];
    } catch (err) {
      throw new Error(err);
    }
  }
}
