import * as Sequelize from 'sequelize'
import RemindModel from './models/remind'


const DB = Symbol('DB')
const USER = Symbol('USER')
const PASS = Symbol('PASS')

const options = {
    [DB]: process.env.PG_NAME,
    [USER]: process.env.PG_USER,
    [PASS]: process.env.PG_PASSWORD
}


const seq = new Sequelize(options[DB], options[USER], options[PASS], {
    host: process.env.PG_HOST || '127.0.0.1',
    port: parseInt(process.env.PG_PORT) || 5432,
    dialect: 'postgres'
})

seq.authenticate()
    .then(() => console.log('Postgres Connected'))
    .catch( e => console.error('Postgres Connection Error : ',e))


export const Remind = RemindModel(seq, Sequelize).sync({
    force: true
})
