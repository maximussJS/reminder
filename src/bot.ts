import * as Bot from 'node-telegram-bot-api'
import {startButtons} from './utils/buttons'
import {hello, MAKE_REMIND, MY_REMINDS, ABOUT_BOT} from './utils/helpers'


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

bot.onText(new RegExp('\/start'), msg => bot.sendMessage(msg.chat.id, hello(msg.from.first_name), startButtons))

bot.on('message', msg => bot.sendMessage(msg.chat.id, 'I am alive!'))

bot.on('callback_query', msg => {
    switch(msg.data) {
        case MAKE_REMIND : {
            bot.sendMessage(msg.message.chat.id, 'Text your remind and send it me')
            break
        }
        case MY_REMINDS : {

        }
        default:
            break
    }
})


export default bot
