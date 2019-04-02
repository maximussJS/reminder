export const hello = name =>
    `Hi, ${name}. I'm a bot written by Max Korsun, i can remember your reminds and tell them you at time what you want.`

export const writeDate = name => `Now, ${name} write me time when I have to remind you (date format = dd-mm-yyyy hh:mm)`

export const remind = str => `Ok i will remind you at ${str}`

export const error = name => `Sorry, ${name} i cannot help you now, please try later`

export const help = () =>
    'What you can do ? \n - Add remind touch "Make Remind", \n' +
    '- Watch all your active reminds touch "My Reminds", \n' +
    '- Watch bot info touch "About Bot" \n'

export const about = () => 'This bot is written by Max Korsun KPI FAM 2019, it can remind you yourself reminds'
