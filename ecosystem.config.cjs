module.exports = {
  apps: [
    {
      name: "workple-mng", // app이름
      script: "./build/index.js", // 실행할 스크립트 파일
      instances: 3, // cpu 코어수 만큼 프로세스 생성 (instance 항목값을 ‘0’으로 설정하면 CPU 코어 수 만큼 프로세스를 생성)
      exec_mode: "cluster", // 클러스터 모드
      max_memory_restart: "300M", // 프로세스의 메모리가 300MB에 도달하면 reload 실행
      env: {
        // 환경변수 지정
        PORT: 3030,
        NODE_ENV: "production",
        SCHEDULE: "false",
      },
      output: "~/logs/pm2/console.log", // 로그 출력 경로 재설정
      error: "~/logs/pm2/consoleError.log", // 에러 로그 출력 경로 재설정
    }
  ],
};
