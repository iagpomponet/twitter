import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from "express";

import {
  authCookieConfig,
  authCookieName,
  generateAccessToken,
} from "../../../../utils/auth";

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email or password incorrect" });
    }

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    try {
      const user = await authenticateUserUseCase.execute({ email, password });
      const token = generateAccessToken(String(user.id));

      return res.cookie(authCookieName, token, authCookieConfig).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
