import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import moment from 'moment-timezone';
import webCustRouter from "./router/web/webCustRouter";
import webAuthRouter from "./router/web/webAuthRouter";
import { initDb } from "./data-source";
moment.tz.setDefault("Asia/Seoul");


// 이후 모든 moment 호출은 기본 시간대를 따릅니다.
const now = moment();
console.log(now.format()); // 한국 시간대에 맞춰 출력됩니다.


if (process.env.NODE_ENV) {
  dotenv.config();
} else {
  throw new Error("NODE_ENV 없음");
}

const port = process.env.PORT;
// const url = process.env.URL;

export const app = express();

//uploads 폴더가 없으면 생성
// app.set("url", process.env.URL);
// app.set("tracker", process.env.TRACKER);
// app.set("imp_key", process.env.IMPORTKEY);
// app.set("imp_secret_key", process.env.IMPORTSECRET);

app.use(cors());
app.use(morgan("dev"));
// app.use(express.raw({ type: '*/*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ crossOriginResourcePolicy: false }));

// *queryBuilder docs : https://orkhan.gitbook.io/typeorm/docs/select-query-builder#how-to-create-and-use-a-querybuilder
app.use("/api/upload", express.static(path.join(__dirname, "../../uploads")));
app.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));

// API
app.use("/api/web/cust", webCustRouter); // 웹 협력사 정보
app.use("/api/web/auth", webAuthRouter); // 웹 로그인 / 회원가입
// app.use("/api/auth", authRouter);
// app.use("/api/board", boardRouter);

app.get("/", (req, res) => res.status(200).send("pong"));

app.get("/ping", (req, res) => res.status(200).send("pong"));


app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

(async () => {
  try {
    await initDb(); // 여기서만 DB 연결 수행
    app.listen(port, () => {
      console.log(`🚀 서버 실행 중: http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ 서버 실행 실패');
    process.exit(1);
  }
})();
