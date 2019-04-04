import * as Bot from 'node-telegram-bot-api'
import { hello, error, help } from './utils/answers'
import { startButtons, helpButtons } from './utils/buttons'
import { makeRemind, aboutBot, myReminds } from './controllers/reminds'
import { MAKE_REMIND, MY_REMINDS, ABOUT_BOT } from './utils/buttonTypes'

const isProd = process.env.NODE_ENV === 'production'

const URL = `${process.env.URL}${process.env.PORT}`

const bot = new Bot(process.env.BOT_TOKEN, {
    polling: !isProd,
})

if (isProd) {
    bot.setWebHook(`${URL}/bot${process.env.BOT_TOKEN}`)
        .then(() => console.log('Webhook set at ', URL))
        .catch(err => console.error('Error at set Webhook : ', err))
}

bot.onText(new RegExp('/start'), msg => bot.sendMessage(msg.chat.id, hello(msg.from.first_name), startButtons))

bot.onText(new RegExp('/help'), msg => bot.sendMessage(msg.chat.id, help(), helpButtons))

bot.on('callback_query', async msg => {
    const { id, first_name } = msg.message.chat
    try {
        switch (msg.data) {
            case MAKE_REMIND: {
                await makeRemind(bot, msg.message)
                break
            }
            case ABOUT_BOT: {
                await aboutBot(bot, msg.message)
                break
            }
            case MY_REMINDS: {
                await myReminds(bot, msg.message)
                break
            }
            default:
                break
        }
    } catch (e) {
        bot.sendMessage(id, error(first_name)).then(() => console.error('Bot Callback Query Error : ', e))
    }
})

export default bot
