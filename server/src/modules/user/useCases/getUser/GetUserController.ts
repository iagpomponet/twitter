import { CustomRequest } from "../../../../types/express";
import { GetUserUseCase } from "./GetUserUseCase";
import { Response } from "express";

export class GetUserController {
  async handle(req: CustomRequest, res: Response) {
    const {
      user: { id },
    } = req;

    try {
      const getUserUseCase = new GetUserUseCase();
      const user = await getUserUseCase.execute({ id });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
