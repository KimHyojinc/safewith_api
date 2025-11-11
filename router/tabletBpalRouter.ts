import express from "express";
import multer from "multer";
import path from "path";
import { auth } from '../middleware/auth';
import RegBp from '../service/bpal/regBp';

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


tabletAuthRouter.post('/bpreg', RegBp);


export default tabletAuthRouter;