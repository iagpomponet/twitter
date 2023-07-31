import {
  authCookieConfig,
  authCookieName,
  generateAccessToken,
} from "../../../../utils/auth";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

function validateObject(obj: Record<string, any>): void {
  const mandatoryFields = Object.entries(obj)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (mandatoryFields.length > 0) {
    throw new Error(
      `The following fields are mandatory: ${mandatoryFields.join(", ")}`
    );
  }
}

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { fullName, username, email, password } = req.body;
    const service = new CreateUserUseCase();

    validateObject({ fullName, username, email, password });

    try {
      const user = await service.execute({
        fullName,
        username,
        email,
        password,
      });

      const token = generateAccessToken(String(user.id));

      return res
        .cookie(authCookieName, token, authCookieConfig)
        .status(201)
        .json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
