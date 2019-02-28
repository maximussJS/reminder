import app from './app'
import {load} from 'dotenv'
import {readFileSync} from 'fs'
import {createServer} from 'https'


const key = readFileSync('key.pem')
const cert = readFileSync('cert.pem')


load()

const server = createServer({
    key: key,
    cert: cert,
    passphrase: process.env.PASSPHRASE
}, app)


server.listen(process.env.PORT, () => console.log('Listening at port ', process.env.PORT))


