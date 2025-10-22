import express from "express";
import checkAuth from "../../middleware/checkAuth";
import multer from "multer";
import path from "path";
import TalkAuth from "../../middleware/talkAuth";
import GetCustList from "../../service/web/cust/getCustList";

const webCustRouter = express.Router();

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

webCustRouter.get('/list', checkAuth, GetCustList);
// webCustRouter.post('/add', checkAuth, TalkAuth, upload.single('file'), AddQna);
// webCustRouter.get('/detail', checkAuth, GetDetail);

export default webCustRouter;