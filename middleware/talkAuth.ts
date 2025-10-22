import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import axios from "axios";

dotenv.config({ path: path.join(__dirname, `/config/.env`) });
const secretKey = 'workpleNODE!';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

let authKey:any = null;
let lastUpdated:any = null;


// 카카오 알림톡 관련 공통 함수 (인증)
async function issueNewAuthKey () {
  const result = await axios.post('https://msggw-auth.supersms.co:9440/auth/v1/token', {}, {
        headers: {
            'X-IB-Client-Id': 'tree_talk01',
            'X-IB-Client-Passwd': 'zLSJ0P27TtrFZttZ1JjA',
            'Content-Type' : 'application/json;charset=UTF-8',
            'Accept' : 'application/json'
        }
    });
    // console.log(result.data);
    return result.data.accessToken;
}

async function TalkAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const now = Date.now();
   // 마지막 업데이트 시간이 없다면, 또는 하루가 지났다면 초기화
    if (!lastUpdated || now - lastUpdated > DAY_IN_MS) {
        authKey = await issueNewAuthKey();

        // authKey = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGbTBXbEtNM0FsNW1uVkJhSURqT2VSODJtMGVhTm9ZOU1uQmY2UEhvb2xFIn0.eyJleHAiOjE3MjkzMzMzNTMsImlhdCI6MTcyOTI0Njk1MywianRpIjoiZjlkYzc1NGEtZmRmNC00NDhlLWFmMjAtZTdiZDNjMDBlNTdkIiwidHlwIjoiQmVhcmVyIiwicmVzb3VyY2VfYWNjZXNzIjp7Im1zZ2d3Ijp7InJvbGVzIjpbIkFMIiwiVVNFUiIsIkZUIl19fSwidXNlcl9uYW1lIjoidHJlZV90YWxrMDEifQ.i2sAHl3LXOlrhNtflUdC8sMWNqCfTh5lByGxw0azBBKFuMzLJuV8t1kOTdQkfzX3vkicpSzvGT3NKKOiub2gNxfQNAXeISy3IZCLS8PLMVrqPxXY4JSZZAoUK0paXZ9Vjxm3Omz_B2_I196ffKsCBTIhNQd8CQS_z0wX-PDu8pVTV4nyC4mePVH7sd_CCq93vErmNSTA7MfsOiKOFHVD8eJLvPsxTEqNm1QW4i347XmFePKytO7JsqInZofKUA-_tx3PF752kX8O0J36739AHo_dIXcLvJ2_-zqXH8slH9scXRvZx1ZzPHWwCZbpkEnt7xiLyWcmzwzbOblZUFlmhQ';
        lastUpdated = now;
        console.log("새로운 인증키가 발급되었습니다:", authKey);
        req.body.talk = authKey;
        next();
    } else {
        req.body.talk = authKey;
        console.log("기존 인증키를 사용합니다:", authKey);
        next();
    }

return authKey;
  } catch (error) {
    return res.status(401).json({ message: "인증 에러(token)" });
  }
}

export default TalkAuth;
