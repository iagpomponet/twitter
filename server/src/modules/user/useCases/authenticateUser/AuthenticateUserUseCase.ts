import { AppDataSource } from "../../../../data-source";
import { compare } from "bcryptjs";

interface AuthenticateUserProps {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: AuthenticateUserProps) {
    // Check if user exists and password is correct
    const repo = AppDataSource.getRepository("User");
    const user = await repo.findOne({ where: { email } });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Email or password incorrect");
    }

    return user;
  }
}
