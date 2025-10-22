const axios = require('axios');
const express = require('express');
const cron = require('node-cron');

// cron 작업 설정 (매일 자정)
cron.schedule('0 0 * * *', async () => {
    try {
        const result1 = await axios.get('http://localhost:3030/api/cron/cron1');
        const result2 = await axios.get('http://localhost:3030/api/cron/cron2');

        console.log('90일 경과 :: ',result1.data.data); // result.data로 응답 내용 출력
        console.log('60시간 경과 :: ',result2.data.data); // result.data로 응답 내용 출력
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
