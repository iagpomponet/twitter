import { AppDataSource } from "../../../../data-source";

interface GetTweetsProps {
  userId: string;
}

export class GetTweetsUseCase {
  async execute({ userId }: GetTweetsProps) {
    const repo = AppDataSource.getRepository("Tweet");

    // TODO: Feature to return all followers tweets
    // TODO: Feature tweets from a user

    try {
      const tweets = await repo.find({
        order: {
          createdAt: "DESC",
        },
        relations: ["user"],
        select: {
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
