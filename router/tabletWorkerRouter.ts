import express from "express";
import multer from "multer";
import path from "path";
import { auth } from '../middleware/auth';
import GetWorkerDetail from '../service/worker/getWorkerDetail';
import GetWorkerList from '../service/worker/getWorkerList';
import GetWorkerInfo from '../service/worker/getWorkerInfo';

const tabletWorkerRouter = express.Router();

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

tabletWorkerRouter.post('/worker/detail', GetWorkerDetail);
tabletWorkerRouter.post('/workerlist', GetWorkerList);
tabletWorkerRouter.post('/workerinfo', GetWorkerInfo);


export default tabletWorkerRouter;