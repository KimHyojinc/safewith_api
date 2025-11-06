import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
// 2025-11-05 added: cookie
const COOKIE_NAME = (process.env.COOKIE_NAME as string) || 'auth';
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 30;

const cookieOpts = {
    httpOnly: true,    // true
    secure: false,  // IS_PROD
    sameSite: "lax" as const, // Cross Domain => 'none' + secure:true
    path: "/",
    maxAge: COOKIE_MAX_AGE,
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.[COOKIE_NAME];
  
  if (!token) {
    return res.status(401).json({ message: "토큰이 없습니다." });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // @ts-ignore
    req.user = decoded as any;
    return next();
  } catch {
    return res.status(401).json({ message: "토큰이 유효하지 않습니다." });
  }
};

/**
 * 로그인 성공 시 쿠키 세팅 헬퍼
 */
export const setAuthCookie = (res: Response, token: string) => {
  res.cookie(COOKIE_NAME, token, { ...cookieOpts, maxAge: COOKIE_MAX_AGE });
};

/**
 * 로그아웃(쿠키 제거)
 */
export const clearAuthCookie = (res: Response) => {
  res.clearCookie(COOKIE_NAME, { ...cookieOpts, maxAge: 0 });
};

// -- 원래 있던 auth 코드 
// export const auth = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: '토큰이 없습니다.' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     // @ts-ignore
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: '토큰이 유효하지 않습니다.' });
//   }
// };
