import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, secret);
};
