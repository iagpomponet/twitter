import { AppDataSource } from "../../../../data-source";

interface CreateTweetProps {
  id: string;
  text: string;
}

export class CreateTweetUseCase {
  async execute({ id, text }: CreateTweetProps) {
    const repo = AppDataSource.getRepository("Tweet");

    const tweet = repo.create({
      text,
      createdAt: new Date(),
      user: id,
    });

    const response = await repo.save(tweet);

    return response;
  }
}
