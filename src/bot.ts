import {load} from 'dotenv'
import * as Bot from 'node-telegram-bot-api'

const isProd = process.env.NODE_ENV === 'production'

load()

const URL = `${process.env.URL}${process.env.PORT}`

const bot = new Bot(process.env.BOT_TOKEN, { polling: !isProd })

if (isProd) {
    bot.setWebHook(`${URL}/bot${process.env.BOT_TOKEN}`)
        .then( () => console.log('Webhook set at ', URL))
        .catch( err => console.error('Error at set Webhook : ', err))
}

bot.on('message', msg => bot.sendMessage(msg.chat.id, 'I am alive!'))


export default bot
