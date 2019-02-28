import {Router} from 'express'
import bot from '../bot'


export default Router()
    .post(`/bot${process.env.BOT_TOKEN}`, async (req,res) => {
        console.log(req.body)
        bot.processUpdate(req.body)
        return res.status(200)
    })
