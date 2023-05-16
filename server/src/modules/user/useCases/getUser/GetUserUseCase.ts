import { AppDataSource } from "../../../../data-source";

interface GetUserProps {
  id: string;
}

export class GetUserUseCase {
  async execute({ id }: GetUserProps) {
    const repo = AppDataSource.getRepository("User");

    const user = await repo.findOne({ where: { id } });

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }
}
