import { Router, Response, Request } from 'express'
import bot from '../bot'

export default Router().post(
    `/bot${process.env.BOT_TOKEN}`,
    (req: Request, res: Response): Response => {
        console.log(req.body)
        bot.processUpdate(req.body)
        return res.status(200)
    }
)
