import { CustomRequest } from "../../../../types/express";
import { CreateTweetUseCase } from "./CreateTweetUseCase";
import { Response } from "express";

export class CreateTweetController {
  async handle(req: CustomRequest, res: Response) {
    const {
      user: { id },
    } = req;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Content is mandatory" });
    }

    const service = new CreateTweetUseCase();

    try {
      const response = await service.execute({
        text,
        id,
      });

      return res.status(201).json(response);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
