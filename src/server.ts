import app from './app'
import {load} from 'dotenv'
import {readFileSync} from 'fs'
import {createServer} from 'https'


const key = readFileSync('../private.key')
const cert = readFileSync('../mydomain.csr')

load()

const server = createServer({
    key: key,
    cert: cert
}, app)


server.listen(process.env.PORT, () => console.log('Listening at port ', process.env.PORT))


