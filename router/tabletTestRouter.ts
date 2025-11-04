import express from "express";
import checkAuth from "../middleware/checkAuth";
import multer from "multer";
import path from "path";
import Login from "../service/auth/login";
import GetEXSiteList from "../service/auth/getEXSiteList";

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


tabletAuthRouter.post('/admin/login', Login);
tabletAuthRouter.post('/site/list', GetEXSiteList);
// webCustRouter.post('/add', checkAuth, TalkAuth, upload.single('file'), AddQna);
// webCustRouter.get('/detail', checkAuth, GetDetail);

export default tabletAuthRouter;