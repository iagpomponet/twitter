import { AppDataSource } from "../../../../data-source";

interface GetTweetsProps {
  userId: string;
}

export class GetTweetsUseCase {
  async execute({ userId }: GetTweetsProps) {
    const repo = AppDataSource.getRepository("Tweet");

    // TODO: Feature to return all followers tweets
    // TODO: Feature tweets from a user
    // TODO: When fetching tweets from ones followers i must not show tweets that are replies

    try {
      const tweets = await repo.find({
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

      return tweets;
    } catch (err) {
      throw new Error(err);
    }
  }
}
