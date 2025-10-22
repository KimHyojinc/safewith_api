import { Request, Response } from 'express';
import moment from 'moment';
import { initModels } from '../../../models/init-models';
import { cryptoHashPassword, verifyPassword } from '../../../middleware/util';
import { models } from '../../../data-source';

// sha256 해시처리하고 base64로 변환 확인
async function GetTestAuth(req: Request, res: Response) {
    const { pwd } = req.query;
    
    try {
        var userList = await models.tb_user.findAll();
        
        var array:any = [];
        for(var row of userList) {
            var isPassword = verifyPassword(String(pwd), String(row.pw));
            // console.log(password);
            if(isPassword) {
                array.push({
                    ...row.dataValues,
                    password: pwd,
                });
            }
        }
  
        return res.status(200).json({data: array});

    } catch (error) {
        return res.status(403).json({ result: false, msg: error });
    }
}

export default GetTestAuth;
