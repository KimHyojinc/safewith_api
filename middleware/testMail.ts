import { Request, Response } from 'express';
import * as nodemailer from 'nodemailer';

async function testMail(req: Request, res: Response) {
    const transporter = nodemailer.createTransport({
        service: 'smtp.mailplug.co.kr',
        port: 465,
        secure: false,
        auth: {
            user: 'pjh_0844',
            pass: 'Qkrwjdgus08*',
        },
    });

    transporter.sendMail({
        from: 'pjh_0844@alcolink.co.kr',
        to: 'diotio97@gmail.com',
        subject: "test message",
        text: `<p>TEST MESSAGE</p>`,
    });

    return res.status(200).json({ result: false, msg: ''});
}

export default testMail;
