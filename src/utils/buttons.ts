import {hello, MY_REMINDS, MAKE_REMIND, ABOUT_BOT} from './helpers'


export const startButtons = {
    disable_web_page_preview: false,
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Make Remind',
                    callback_data: MAKE_REMIND
                },
                {
                    text: 'My Reminds',
                    callback_data: MY_REMINDS
                }
            ],
            [
                {
                    text: 'About Bot',
                    callback_data: ABOUT_BOT
                }
            ]
        ]
    }
}
