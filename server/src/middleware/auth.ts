import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";

export const HandleAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tw_access_token } = req.cookies;

  try {
    const { sub: userId } = jwt.verify(tw_access_token, process.env.JWT_SECRET);

    if (!userId) throw new Error("Invalid token");

    const repo = AppDataSource.getRepository("User");
    const user = await repo.find({
      where: {
        id: userId,
      },
    });

    if (!user) throw new Error("User not found");

    (req as any).user = {
      id: userId as string,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized", details: err });
  }
};
