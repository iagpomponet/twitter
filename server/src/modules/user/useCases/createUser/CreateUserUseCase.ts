import { hash } from "bcryptjs";
import { AppDataSource } from "../../../../data-source";

interface CreateUserProps {
  fullName: string;
  email: string;
  password: string;
  username: string;
}

export class CreateUserUseCase {
  async execute({ fullName, email, password, username }: CreateUserProps) {
    const repo = AppDataSource.getRepository("User");

    const userAlreadyCreated = await repo.findOne({ where: { email } });

    if (userAlreadyCreated) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const user = repo.create({
      fullName,
      email,
      password: hashedPassword,
      username,
      createdAt: new Date(),
      profilePic:
        "https://miro.medium.com/max/316/1*LGHbA9o2BKka2obwwCAjWg.jpeg",
    });

    await repo.save(user);

    return user;
  }
}
