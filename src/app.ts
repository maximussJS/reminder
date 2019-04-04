import * as express from 'express'
import router from './routes'
import { json, urlencoded } from 'body-parser'

const app = express()

app.use(json())
app.use(
    urlencoded({
        extended: true,
    })
)

app.use(router)

export default app
