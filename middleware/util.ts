import moment from "moment";
import 'moment/locale/ko';
import bcrypt from 'bcrypt'
import sharp from "sharp";
import crypto from 'crypto';
import dotenv from "dotenv";

dotenv.config();

export const dev_mode = process.env.NODE_ENV;
// 비밀번호 암호화
export function HashPassword(plainPassword: string) {
    const saltRounds = 10;
    return bcrypt.hash(plainPassword, saltRounds)
        .then(hashedPassword => {
            console.log("암호화된 비밀번호:", hashedPassword);
            return hashedPassword;  // 암호화된 비밀번호 반환
        })
        .catch(error => {
            console.error("비밀번호 암호화 중 오류:", error);
        });
}

// 비밀번호 일치 여부 반환
export function ComparePasswords(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword)
        .then(isMatch => {
            if (isMatch) {
                console.log("비밀번호가 일치합니다.");
            } else {
                console.log("비밀번호가 일치하지 않습니다.");
            }
            return isMatch;
        })
        .catch(error => {
            console.error("비밀번호 비교 중 오류:", error);
        });
}

// 썸네일 이미지 생성 함수
export const CreateThumbnail = async (imagePath:string, thumbnailPath:string, width: number, height: number) => {
    try {
        await sharp(imagePath)
        .resize(width, height) // 썸네일 사이즈
        .toFile(thumbnailPath); // 썸네일 파일로 저장
        console.log('Thumbnail created:', thumbnailPath);
      return true;
    } catch (err) {
        console.error('Error creating thumbnail:', err);
        return false;
    }
};

export function cryptoHashPassword(password: string): string {
  return crypto.createHash('sha256').update(password, 'utf8').digest('base64');
}

/**
 * 비밀번호가 저장된 해시와 일치하는지 확인하는 함수
 * @param inputPassword - 사용자가 입력한 비밀번호 (평문)
 * @param storedHash - 저장된 비밀번호 해시 (Base64 인코딩된 SHA-256)
 * @returns boolean - 일치하면 true, 아니면 false
 */
export function verifyPassword(inputPassword: string, storedHash: string): boolean {
  const inputHash = cryptoHashPassword(inputPassword);

  // timing-safe 비교
  const inputBuf:any = Buffer.from(inputHash, 'base64');
  const storedBuf:any = Buffer.from(storedHash, 'base64');

  if (inputBuf.length !== storedBuf.length) return false;

  return crypto.timingSafeEqual(inputBuf, storedBuf);
}

