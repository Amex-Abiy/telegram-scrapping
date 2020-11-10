const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const Telegram = require('./telegram')

const BASE_URL = 'https://web.telegram.org/#/login';
const contryCode = 251;
const phoneNo = 966245238;

const url = 'https://web.telegram.org/#/im?p=@ethio_amazon_group2';

(async() => {
    const telegram = new Telegram(url);
    await telegram.initialize(BASE_URL);
    await telegram.login(contryCode, phoneNo);
    await telegram.scrapeUsers();
})()