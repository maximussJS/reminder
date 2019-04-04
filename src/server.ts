import { load } from 'dotenv'

load()

import './database'
import app from './app'
import { readFileSync } from 'fs'
import { createServer } from 'https'

const key = readFileSync('key.pem')
const cert = readFileSync('cert.pem')

const server = createServer(
    {
        key: key,
        cert: cert,
        passphrase: process.env.PASSPHRASE,
    },
    app
)

server.listen(process.env.PORT, () => console.log('Listening at port ', process.env.PORT))
