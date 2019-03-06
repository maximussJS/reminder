import {json,urlencoded} from 'body-parser'
import * as express from 'express'
import router from './routes'


const app = express()

app.use(json())
app.use(urlencoded({
    extended: true
}))

app.use(router)


export default app
