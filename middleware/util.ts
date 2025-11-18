import dayjs from 'dayjs';
import 'moment/locale/ko';
import axios from "axios";
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

// 2025-11-07 added
// fileName의 확장자를 변경하는 함수
export function changeExtension(fileName: string, newExtension: string): string {
  return fileName.replace(/\.[^/.]+$/, newExtension);
}
/**
 * base64 -> 문자열 디코딩
 * @param base64Str Base64 인코딩된 문자열
 * @returns 디코딩된 UTF-8 문자열
 */
export function convertBase64ToString(base64Str: string): string {
  // Node.js 환경
  return Buffer.from(base64Str, 'base64').toString('utf-8');
}
// 2025-11-05 added
// Base64 → UTF-8 문자열 디코더
export function convertBase64ToStringStrict(base64Str: string): string {
  if (typeof base64Str !== "string") {
    throw new TypeError("base64Str must be a string");
  }

  // 필요시: 공백 허용을 원치 않으면 이 줄 제거(현재는 공백 미허용)
  const s = base64Str; // .replace(/\s+/g, "")  // ← 공백 허용하려면 주석 해제

  // variant auto-detect
  const isUrlSafe = /[-_]/.test(s);
  const base64Body = s;

  // 1) 문자 집합 & 패딩 형태 검증 (끝 이외 위치의 '=' 금지)
  const reStandard = /^[A-Za-z0-9+/]*={0,2}$/;
  const reUrlSafe  = /^[A-Za-z0-9\-_]*={0,2}$/;
  const validAlphabet = (isUrlSafe ? reUrlSafe : reStandard).test(base64Body);
  if (!validAlphabet) {
    throw new Error("Invalid Base64 alphabet or misplaced padding");
  }

  // 2) 길이와 패딩 개연성 검증
  const padCount = (base64Body.match(/=+$/)?.[0].length) ?? 0;
  if (padCount > 2) {
    throw new Error("Invalid Base64 padding");
  }
  // '='가 있으면 길이는 반드시 4의 배수여야 함
  if (padCount > 0 && base64Body.length % 4 !== 0) {
    throw new Error("Invalid Base64 length with padding");
  }
  // 길이 % 4 == 1 은 절대 불가
  if (base64Body.length % 4 === 1) {
    throw new Error("Invalid Base64 length");
  }

  // 3) URL-safe → 표준형 치환
  let normalized = isUrlSafe
    ? base64Body.replace(/-/g, "+").replace(/_/g, "/")
    : base64Body;

  // 4) 패딩 누락 보정 (len % 4 == 2 또는 3 인 경우만)
  if (padCount === 0 && normalized.length % 4 !== 0) {
    const rem = normalized.length % 4; // 2 or 3만 가능
    if (rem === 2 || rem === 3) {
      normalized = normalized + "=".repeat(4 - rem);
    } else {
      // rem === 1 은 위에서 이미 걸러짐
      throw new Error("Invalid Base64 length (cannot be fixed by padding)");
    }
  }

  // 5) 디코드 (사전 검증을 했으므로 관대한 디코더여도 안전)
  try {
    // Node 등
    if (typeof Buffer !== "undefined" && typeof (Buffer as any).from === "function") {
      const bytes = Buffer.from(normalized, "base64");
      // @ts-ignore
      return new TextDecoder("utf-8").decode(bytes);
    }
    // 브라우저
    if (typeof atob !== "undefined") {
      const binary = atob(normalized);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return new TextDecoder("utf-8").decode(bytes);
    }
    throw new Error("No base64 decoder available in this environment");
  } catch (e) {
    throw new Error(`Invalid Base64 string: ${(e as Error).message}`);
  }
}

// file download 
export async function downloadFileAsync(url: string): Promise<Buffer> {
  const response = await axios.get(url, {
    responseType: 'arraybuffer' // 중요: 바이너리 응답으로 받기
  });

  return Buffer.from(response.data);
}

// AES-192-CBC 복호화 함수
export function decrypt(cipherText: string, key: string): string {
  const keyBuffer = Buffer.from(key, 'utf8'); // 24-byte key → AES-192
  const iv = Buffer.alloc(16, 0); // Zero IV

  // @ts-ignore
  const decipher = crypto.createDecipheriv('aes-192-cbc', keyBuffer, iv);
  let decrypted = decipher.update(cipherText, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

/**
 * 주민등록번호 앞자리(pno1: YYMMDD)로 나이를 계산한다.
 */
export function calculateAgeFromPno1(pno1?: string): number {
  if (!pno1 || pno1.length < 6) return 0;

  try {
    const yy = parseInt(pno1.substring(0, 2), 10);
    const mm = parseInt(pno1.substring(2, 4), 10);
    const dd = parseInt(pno1.substring(4, 6), 10);

    const fullYear = yy <= 20 ? 2000 + yy : 1900 + yy;
    const birthDate = dayjs(`${fullYear}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`);
    const today = dayjs();

    let age = today.diff(birthDate, 'year');
    if (today.isBefore(birthDate.add(age, 'year'))) {
      age -= 1;
    }

    return age;
  } catch (error) {
    console.error("age 계산 에러:", pno1, error);
    return 0;
  }
}

// sms 발송을 위한 user key 생성
export function generateUserKey(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const ff = now.getMilliseconds().toString().padStart(3, '0').slice(0, 2);
  return (
    pad(now.getMonth() + 1) +
    pad(now.getDate()) +
    pad(now.getHours()) +
    pad(now.getMinutes()) +
    pad(now.getSeconds()) +
    ff
  );
}