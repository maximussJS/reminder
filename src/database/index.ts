import 'reflect-metadata'
import { Remind } from './models/remind'
import { createConnection, Connection, ConnectionOptions } from 'typeorm'

let connection: Connection

const connectionOptions: ConnectionOptions = {
    name: `default`,
    type: `postgres`,
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: process.env.NODE_ENV === 'production',
    entities: [Remind],
}

createConnection(connectionOptions)
    .then((conn: Connection) => {
        console.log('Postgres Connected')
        connection = conn
    })
    .catch((err: Error) => console.error('Postgres Connection Error : ', err))

export { connection }
