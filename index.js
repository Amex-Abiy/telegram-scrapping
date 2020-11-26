const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const Telegram = require('./telegram')

const BASE_URL = 'https://web.telegram.org/#/login';
const contryCode = 251;
const phoneNo = 901121642;

const urls = [
    // 'https://web.telegram.org/#/im?p=@ethio_amazon_group2',
    // 'https://web.telegram.org/#/im?p=@machesmarket',
    // 'https://web.telegram.org/#/im?p=@ethio_Amazon_group',
    // 'https://web.telegram.org/#/im?p=@python_amharic',
    // 'https://web.telegram.org/#/im?p=@Utubers_SubToSub',
    // 'https://web.telegram.org/#/im?p=@aaititsc',
    // 'https://web.telegram.org/#/im?p=@flutter_forum',
    // 'https://web.telegram.org/#/im?p=@ethio_amazon_group3',
    // 'https://web.telegram.org/#/im?p=@merkatosell',
    // 'https://web.telegram.org/#/im?p=@walia_online_market',
    // 'https://web.telegram.org/#/im?p=@guramaylepics'
    // 'https://web.telegram.org/#/im?p=@zembilshoppingcenter',
    // 'https://web.telegram.org/#/im?p=@ethiotech_discussion',
    // 'https://web.telegram.org/#/im?p=@GDG_Addis',
    // 'https://web.telegram.org/#/im?p=@ethio_developer_jobs',
    // 'https://web.telegram.org/#/im?p=@Almas_TechG',
    // 'https://web.telegram.org/#/im?p=@AIESEC_ExternalRelations',
    // 'https://web.telegram.org/#/im?p=@myfellow',
    // 'https://web.telegram.org/#/im?p=@etdevs',
    // 'https://web.telegram.org/#/im?p=@gofermarket',
    // 'https://web.telegram.org/#/im?p=@Shop_Habesha',
    // 'https://web.telegram.org/#/im?p=@MerkatoGebeya2',
    // 'https://web.telegram.org/#/im?p=@merkatoo1',
    'https://web.telegram.org/#/im?p=@mezoMarket',
    'https://web.telegram.org/#/im?p=@merkaton1',
    'https://web.telegram.org/#/im?p=@ahadumarket12',
    'https://web.telegram.org/#/im?p=@Zenation_talking',
    'https://web.telegram.org/#/im?p=@ZionHOTSale',
    'https://web.telegram.org/#/im?p=@merkato101',

];

// (async() => {
//     const telegram = new Telegram(urls);
//     await telegram.initialize(BASE_URL);
//     await telegram.login(contryCode, phoneNo);
//     // const authStatus = await telegram.login(contryCode, phoneNo);
//     // console.log('authStatus -> ', authStatus)
//     // if (authStatus) {
//     //     await telegram.scrapeUsers();
//     // }
// })()

console.log(require('./merkato101.json').users.length)