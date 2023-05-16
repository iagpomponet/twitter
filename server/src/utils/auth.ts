import { CookieOptions } from "express";
import * as jwt from "jsonwebtoken";

export const generateAccessToken = (id: string) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) throw new Error("JWT secret not defined");

  const token = jwt.sign({}, secret, {
    expiresIn: "1d",
    subject: id,
  });

  return token;
};

export const authCookieConfig: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

export const authCookieName = "tw_access_token";
