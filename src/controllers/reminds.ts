import * as Bot from 'node-telegram-bot-api'
import { about, error, writeDate } from '../utils/answers'
import { repeatMakeRemindButton } from '../utils/buttons'
import { Remind } from '../database/models/remind'

export const makeRemind = async (bot: Bot, msg: Bot.Message): Promise<void> => {
    const { id, first_name } = msg.chat
    try {
        await bot.sendMessage(id, 'Text your remind and send it me')
        bot.once('message', async text => {
            await bot.sendMessage(id, writeDate(first_name))
            bot.once('message', async data => {
                if (isNaN(Date.parse(data.text))) {
                    await bot.sendMessage(id, 'Invalid time, please repeat', repeatMakeRemindButton)
                    return
                } else if (Date.parse(data.text) < Date.parse(new Date().toDateString())) {
                    await bot.sendMessage(id, 'This time has passed, enter again', repeatMakeRemindButton)
                    return
                } else {
                    new Remind().setInfo(text.text, id, new Date(data.text))
                    await bot.sendMessage(id, 'Created!')
                    return
                }
            })
        })
    } catch (e) {
        console.error('Bot Make Remind Error : ', e)
        bot.sendMessage(id, error(first_name))
    }
}

export const aboutBot = async (bot: Bot, msg: Bot.Message): Promise<void> => {
    const { id, first_name } = msg.chat
    try {
        await bot.sendMessage(id, about())
        return
    } catch (e) {
        console.error('Bot About bot Error : ', e)
        bot.sendMessage(id, error(first_name))
    }
}
