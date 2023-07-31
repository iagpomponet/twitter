import { AppDataSource } from "../../../../data-source";
import { User } from "../../../../entity/User";

interface GetUserBootstrapProps {
  id: string;
}

export class GetUserBootstrapUseCase {
  async execute({ id }: GetUserBootstrapProps) {
    const repo = AppDataSource.getRepository(User);
    const user = await repo.findOne({ where: { id } });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
