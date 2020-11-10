const puppeteer = require('puppeteer');

class Telegram {
    constructor(channelURI) {
        this.channelURI = channelURI;
        this.browser = null;
        this.page = null;
    }

    async initialize(BASE_URL) {
        this.browser = await puppeteer.launch({
            headless: false,
            ignoreHTTPSErrors: true,
            defaultViewport: {
                width: 1366,
                height: 663
            }
        });
        this.page = await this.browser.newPage();
        await this.page.setDefaultNavigationTimeout(0);
        await this.page.goto(BASE_URL);
    }

    async login(contryCode, phoneNumber) {
        // type in contry code
        await this.page.waitForSelector('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.login_phone_groups_wrap.clearfix > div.md-input-group.login_phone_code_input_group.md-input-has-value.md-input-animated > input')
        let contryCodeInput = await this.page.$('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.login_phone_groups_wrap.clearfix > div.md-input-group.login_phone_code_input_group.md-input-has-value.md-input-animated > input');
        await contryCodeInput.click({ clickCount: 3 });
        await contryCodeInput.press('Backspace');
        await this.page.type('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.login_phone_groups_wrap.clearfix > div.md-input-group.login_phone_code_input_group.md-input-has-value.md-input-animated > input', contryCode.toString(), { delay: 25 })

        // type in phone number
        await this.page.waitForSelector('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.login_phone_groups_wrap.clearfix > div.md-input-group.login_phone_num_input_group.md-input-animated > input')
        await this.page.type('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.login_phone_groups_wrap.clearfix > div.md-input-group.login_phone_num_input_group.md-input-animated > input', phoneNumber.toString(), { delay: 25 })

        // click enter
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector('body > div.modal.fade.confirm_modal_window.in > div.modal-dialog > div > div > div.md_simple_modal_footer > button.btn.btn-md.btn-md-primary')
        await this.page.click('body > div.modal.fade.confirm_modal_window.in > div.modal-dialog > div > div > div.md_simple_modal_footer > button.btn.btn-md.btn-md-primary')

        // type in verification code through terminal
        await this.page.waitForSelector('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.md-input-group.md-input-group-centered.md-input-animated > input')
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Enter the verification code sent to you - ', async(verificationCode) => {
            console.log(`Verification Code - ${verificationCode}`);
            await this.page.type('body > div.page_wrap > div > div.login_page > div.login_form_wrap > form > div.md-input-group.md-input-group-centered.md-input-animated > input', verificationCode.toString(), { delay: 25 })
            await this.page.keyboard.press('Enter');
        });
        readline.close()

    }

    async scrapeUsers() {
        await this.page.goto(this.channelURI)
        await this.page.waitForSelector('body > div.page_wrap > div:nth-child(1) > div > div > div.tg_head_main_wrap > div > div.tg_head_peer_title_wrap > a', { timeout: 90000 })
        await this.page.click('body > div.page_wrap > div:nth-child(1) > div > div > div.tg_head_main_wrap > div > div.tg_head_peer_title_wrap > a')
        await this.page.waitForSelector('body > div.modal.fade.chat_modal_window.channel_modal_window.mobile_modal.in > div.modal-dialog > div > div > div.md_modal_body > div:nth-child(2) > div.md_modal_iconed_section_wrap.md_modal_iconed_section_peers > div', { timeout: 90000 })
        let list = document.querySelector('body > div.modal.fade.chat_modal_window.channel_modal_window.mobile_modal.in > div.modal-dialog > div > div > div.md_modal_body > div:nth-child(2) > div.md_modal_iconed_section_wrap.md_modal_iconed_section_peers > div').children()
        console.log(list.length)
        await this.page.click('body > div.modal.fade.chat_modal_window.channel_modal_window.mobile_modal.in > div.modal-dialog > div > div > div.md_modal_body > div:nth-child(2) > div.md_modal_iconed_section_wrap.md_modal_iconed_section_peers > div > div:nth-child(5) > div.md_modal_list_peer_name > a')
            // for (let i = 0; i < list.length; i++) {

        // }
    }
}

module.exports = Telegram;