import {load} from 'dotenv'
import * as Bot from 'node-telegram-bot-api'
import {MAKE_REMIND, MY_REMINDS, ABOUT_BOT, hello} from './types'


load()

const isProd = process.env.NODE_ENV === 'production'

const URL = `${process.env.URL}${process.env.PORT}`

const bot = new Bot(process.env.BOT_TOKEN, {
    polling: !isProd
})

if(isProd) {
    bot.setWebHook(`${URL}/bot${process.env.BOT_TOKEN}`)
        .then( () => console.log('Webhook set at ', URL))
        .catch( err => console.error('Error at set Webhook : ', err))
}

const buttons = {
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

bot.onText(new RegExp('\/start'), msg => bot.sendMessage(msg.chat.id, hello(msg.from.first_name), buttons))

bot.on('message', msg => bot.sendMessage(msg.chat.id, 'I am alive!'))

bot.on('callback_query', msg => {
  console.log(msg)
})


export default bot
