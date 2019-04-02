import { MY_REMINDS, MAKE_REMIND, ABOUT_BOT } from './buttonTypes'

export const startButtons = {
    disable_web_page_preview: false,
    reply_markup: {
        force_reply: true,
        inline_keyboard: [
            [
                {
                    text: 'Make Remind',
                    callback_data: MAKE_REMIND,
                },
                {
                    text: 'My Reminds',
                    callback_data: MY_REMINDS,
                },
            ],
            [
                {
                    text: 'About Bot',
                    callback_data: ABOUT_BOT,
                },
            ],
        ],
    },
}

export const helpButtons = {
    disable_web_page_preview: false,
    reply_markup: {
        force_reply: true,
        inline_keyboard: [
            [
                {
                    text: 'Make Remind',
                    callback_data: MAKE_REMIND,
                },
                {
                    text: 'My Reminds',
                    callback_data: MY_REMINDS,
                },
            ],
            [
                {
                    text: 'About Bot',
                    callback_data: ABOUT_BOT,
                },
            ],
        ],
    },
}

export const repeatMakeRemindButton = {
    disable_web_page_preview: false,
    reply_markup: {
        force_reply: true,
        inline_keyboard: [
            [
                {
                    text: 'Repeat',
                    callback_data: MAKE_REMIND,
                },
            ],
        ],
    },
}
