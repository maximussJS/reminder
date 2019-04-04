import * as Bot from 'node-telegram-bot-api'
import { connection } from '../database'
import { Remind } from '../database/models/remind'
import { repeatMakeRemindButton } from '../utils/buttons'
import { about, error, writeDate, created, createMyReminds } from '../utils/answers'

export const makeRemind = async (bot: Bot, msg: Bot.Message): Promise<void> => {
    const { id, first_name } = msg.chat
    try {
        await bot.sendMessage(id, 'Text your remind and send it me')
        bot.once('message', async remind => {
            await bot.sendMessage(id, writeDate(first_name))
            bot.once('message', async time => {
                if (isNaN(Date.parse(time.text))) {
                    await bot.sendMessage(id, 'Invalid time, please repeat', repeatMakeRemindButton)
                    return
                } else if (Date.parse(time.text) < Date.parse(new Date().toDateString())) {
                    await bot.sendMessage(id, 'This time has passed, enter again', repeatMakeRemindButton)
                    return
                } else {
                    const r = new Remind()
                    r.setInfo(remind.text, id, new Date(time.text))
                    await connection.manager.save(r)
                    await bot.sendMessage(
                        id,
                        created(
                            r
                                .getTime()
                                .toString()
                                .split('GMT')[0]
                        )
                    )
                    return
                }
            })
        })
    } catch (e) {
        bot.sendMessage(id, error(first_name)).then(() => console.error('Bot Make Remind Error : ', e))
    }
}

export const aboutBot = async (bot: Bot, msg: Bot.Message): Promise<void> => {
    const { id, first_name } = msg.chat
    try {
        await bot.sendMessage(id, about())
        return
    } catch (e) {
        bot.sendMessage(id, error(first_name)).then(() => console.error('Bot About bot Error : ', e))
    }
}

export const myReminds = async (bot: Bot, msg: Bot.Message): Promise<void> => {
    const { id, first_name } = msg.chat
    try {
        const remindRep = await connection.getRepository(Remind)
        const reminds = await remindRep.findAndCount({
            chat_id: id,
        })
        await bot.sendMessage(id, createMyReminds(reminds[0], reminds[1], first_name))
        return
    } catch (e) {
        bot.sendMessage(id, error(first_name)).then(() => console.error('Bot About bot Error : ', e))
    }
}
