import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, `/config/.env`) });
const secretKey = 'testNODE!';

async function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.get("Authorization");
  if (authHeader?.split(' ')[1] != secretKey) {
    return res.status(401).json({ message: "인증 에러(header)" });
  }
  const token = jwt.sign({...req.body}, secretKey);
  try {
    let payload = jwt.verify(token, secretKey);
    if (payload) {
        req.body.token = token;
        next();
    } else {
        return res.status(401).json({ message: "인증 에러(body)" });
    }
  } catch (error) {
    return res.status(401).json({ message: "인증 에러(token)" });
  }
}

export default checkAuth;
