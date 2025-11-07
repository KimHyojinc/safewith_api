import express from "express";
import multer from "multer";
import path from "path";
import { auth } from '../middleware/auth';
import GetEduList from '../service/edu/getEduList';
import GetEduDetail from '../service/edu/getEduDetail';
import GetEduContentsDetail from '../service/edu/getEduContentsDetail';
import GetEduThumbnail from '../service/edu/getEduThumbnail';
import GetEduMovie from '../service/edu/getEduMovie';

const tabletEduRouter = express.Router();

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


tabletEduRouter.post('/edulist', auth, GetEduList);
tabletEduRouter.post("/edudetail", auth, GetEduDetail);
tabletEduRouter.post("/edu/contents", auth, GetEduContentsDetail);
tabletEduRouter.get("/edu/thumbnail/:edu_contents_code", GetEduThumbnail);
tabletEduRouter.get("/edumovie/:edu_sch_code", GetEduMovie);

export default tabletEduRouter;