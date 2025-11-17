import { Request, Response } from "express";
import {  } from '../../shared/queries';
import { ResultData } from '../../shared/result';
import { generateUserKey } from '../../middleware/util';
import fs from "fs";
import path from "path";
import FormData from "form-data";
import axios from "axios";

async function sendPostMessage(
  url: string,
  formData: Record<string, string>,
  filePaths?: string[]
) {
  try {
    const form = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      form.append(key, value);
    }

    if (filePaths && filePaths.length > 0) {
      for (let i = 0; i < Math.min(filePaths.length, 3); i++) {
        const stream = fs.createReadStream(filePaths[i]);
        form.append(`imageFile${i + 1}`, stream, path.basename(filePaths[i]));
      }
    }
    console.log(process.env.BIZ_WIDE_API_KEY)
    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(),
        sejongApiKey: process.env.BIZ_WIDE_API_KEY || ''
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity
    });

    console.log(response);

    return typeof response.data === 'string'
      ? response.data
      : JSON.stringify(response.data);
  } catch (error: any) {
    console.error('[sendPostMessage] Error:', error.response?.data || error.message);
    return '';
  }
} 

// @POST /api/sendsms
// 문자전송
async function SendSMS(req: Request, res: Response) {
  const { receiverTelNo, contents } = req.body;

  try {
    if (!receiverTelNo || !contents) {
      return res.status(400).json({
        result: "Error",
        message: 'receiverTelNo and contents are required'
      });
    }

    const userKey = generateUserKey();

    const payload = {
      userKey,
      receiverTelNo: receiverTelNo.replaceAll('-', ''),
      callback: process.env.BIZ_WIDE_CALLBACK || '',
      contents
    };

    const responseJson = await sendPostMessage(process.env.BIZ_WIDE_API || '', payload);
    const response = JSON.parse(responseJson);

    if (response.code === '200') {
      return res.json({
        result: 'OK',
        data: response.sendCode,
        message: response.message || '전송 성공'
      });
    } else {
      return res.json({
        result: 'Error',
        data: response.sendCode,
        message: response.message || '전송 실패'
      });
    }
  } catch (error) {
    console.error('[SendSMS Error]', error);
    return res.status(500).json({ result: false, msg: error });
  }
}

export default SendSMS;
