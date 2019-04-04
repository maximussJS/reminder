import { Remind } from '../database/models/remind'

export const hello = (name: string): string =>
    `Hi, ${name}. I'm a bot written by Max Korsun, i can remember your reminds and tell them you at time what you want.`

export const writeDate = (name: string): string =>
    `Now, ${name} write me time when I have to remind you.\nDate format = dd-mm-yyyy hh:mm`

export const created = (str: string): string => `Ok i will remind you at ${str}.`

export const error = (name: string): string => `Sorry, ${name} i cannot help you now, please try later.`

export const help = (): string =>
    'What you can do ? \n- Add remind touch "Make Remind", \n' +
    '- Watch all your active reminds touch "My Reminds", \n' +
    '- Watch bot info touch "About Bot" \n'

export const about = (): string => 'This bot is written by Max Korsun KPI FAM 2019, it can remind you yourself reminds'

export const createMyReminds = (reminds: Array<Remind>, count: number, name: string): string => {
    let str: string = `${name} you have ${count} reminds.\n`
    for (const r of reminds) {
        str = str.concat(
            `- Remind text : ${r.getText()} , appointed time : ${
                r
                    .getTime()
                    .toString()
                    .split('GMT')[0]
            }.\n`
        )
    }
    return str
}
