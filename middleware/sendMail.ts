import nodemailer from 'nodemailer';


// 이메일 발송 기능 공통
export const sendMail = async (email: string, store:string, date: string|any, filename: string, path: any) => {
  console.log(path);
    const transporter = nodemailer.createTransport({
        service: 'gmail', // 사용하려는 이메일 서비스
        auth: {
            user: 'help@workple.ai', // 발송자 이메일 주소
            pass: 'wrfliwjpnoybhnhw'  // 발송자 이메일 비밀번호
        }
    });
    // HTML 이메일 발송 옵션 설정
    const mailOptions: nodemailer.SendMailOptions = {
        from: '"웍플" <help@workple.ai>' as string, // 발송자 이메일 주소
        to: email, // 수신자 이메일 주소
        subject: `[${store}] ${date}월 급여 정보 공유 드립니다.`, // 이메일 제목
        attachments: [
          {
            filename: `[${store}] ${date}월 급여정보.xlsx`,
            path: path,
          },
        ],
        html: `
      <p>안녕하세요. ${store} 입니다.</p>
      <p>${date}월 급여 정보 공유 드리니, 확인 부탁드립니다.</p>
      <p>추가로 해당 양식에 급여장부(1번 탭)를 업데이트해서 공유해주시기 바랍니다.
      감사합니다!</p>
      <p style="margin-top: 10px">${store} 드림</p>
    ` // 이메일 본문 (HTML 형식)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error occurred:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}

export const sendMailPdf = async (email: string, store:string, date: string|any, filename: string, path: any) => {
  console.log(path);
    const transporter = nodemailer.createTransport({
        service: 'gmail', // 사용하려는 이메일 서비스
        auth: {
            user: 'help@workple.ai', // 발송자 이메일 주소
            pass: 'wrfliwjpnoybhnhw'  // 발송자 이메일 비밀번호
        }
    });
    // HTML 이메일 발송 옵션 설정
    const mailOptions: nodemailer.SendMailOptions = {
        from: '"웍플" <help@workple.ai>' as string, // 발송자 이메일 주소
        to: email, // 수신자 이메일 주소
        subject: `[${store}] ${date}월 급여명세서 공유 드립니다.`, // 이메일 제목
        attachments: [
          {
            filename: `[${store}] ${date}월 급여명세서.pdf`,
            path: path,
          },
        ],
        html: ` 
      <p>안녕하세요. ${store} 입니다.</p>
      <p>${date}월 급여명세서 공유 드리니, 확인 부탁드립니다.</p>

      <p style="margin-top: 10px">${store} 드림</p>
    ` // 이메일 본문 (HTML 형식)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error occurred:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}

export const sendPassMail = async (email: string, link: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // 사용하려는 이메일 서비스
        auth: {
            user: 'help@workple.ai', // 발송자 이메일 주소
            pass: 'wrfliwjpnoybhnhw'  // 발송자 이메일 비밀번호
        }
    });
    // HTML 이메일 발송 옵션 설정
    const mailOptions: nodemailer.SendMailOptions = {
        from: '"웍플" <help@workple.ai>' as string, // 발송자 이메일 주소
        to: email, // 수신자 이메일 주소
        subject: `[웍플] 비밀번호를 재설정할 수 있어요.`, // 이메일 제목
        html: `
        <div style="width: 700px; margin: 0 auto; background-color: white; margin-top: 100px">
          <div style="font-size: 14px;">
              <div style="margin-left: -20px;">
                  <img src="https://ceo.workple.ai/images/logo.png" style="width: 150px;" />
              </div>
              <p style="color: #000038; font-size: 40px; font-weight: bold; margin-top:60px ">비밀번호를<br/>재설정 해주세요.</p>
              <p style="margin-top: 30px; line-height: 1.6; font-size: 20px; color: #222">안녕하세요. 웍플팀입니다.<br/>
              본 이메일을 통해 웍플 계정의 비밀번호를 재설정할 수 있습니다.<br />
              아래 링크를 클릭하면 비밀번호 재설정 페이지로 이동합니다.
              </p>
              <div style="margin: 40px 0rem 30px 0rem; text-align: center; padding-top: 27px; padding-bottom: 27px">
              <a style="background-color: #5765FF; color: white; padding:27px 60px; border-radius: 6px; font-size: 22px; text-decoration: auto; font-weight: bold;" href="${link}" target="_blank">비밀번호 재설정으로 이동</a>
              </div>
              <p style="line-height: 1.6;font-size: 20px; color: #222;">
                비밀번호 재설정을 통해 비밀번호가 변경되면 계정 보안을 위해 모든 기기와 브라우저에서 자동 로그인이 해제됩니다.
              </p>
              <p style="margin-top: 30px;line-height: 1.6;font-size: 20px; color: #222">감사합니다.<br/>웍플팀 드림</p>
              <div style="background-color: #D5D5D5; width: 100%; height: 1px; margin: 60px 0;"></div>
              <p style="color: #666666; text-align: center; margin: 0; line-height: 1.6; font-size: 16px;">(주)알체라<br/>경기도 성남시 분당구 판교로256번길 25 GB2빌딩 C동 7층  |  help@workple.ai<br/>ⓒ 2025. Alchera Inc.</p>
          </div>
        </div>
    ` // 이메일 본문 (HTML 형식)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error occurred:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}
