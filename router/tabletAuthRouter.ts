import express from "express";
import checkAuth from "../middleware/checkAuth";
import multer from "multer";
import path from "path";
import { Login, LoginWorker, Logout, GetEXSiteList } from "../service/auth";
import GetTestAuth from "../service/auth/getTestAuth";
import { auth } from '../middleware/auth';

const tabletAuthRouter = express.Router();

// Multer 설정: 업로드된 파일을 'uploads/' 디렉토리에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/qna');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
const upload = multer({ storage: storage });

tabletAuthRouter.get('/test/pw', GetTestAuth);
tabletAuthRouter.post('/login/admin', Login);
tabletAuthRouter.post('/login/worker', LoginWorker);
tabletAuthRouter.post('/logout', Logout);
tabletAuthRouter.post('/site/list', auth, GetEXSiteList);

export default tabletAuthRouter;