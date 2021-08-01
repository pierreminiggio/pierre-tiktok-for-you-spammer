import spamTikTok from './src/spamTiKTok.js'
import fs from 'fs'

fs.readFile('./ids.json', 'utf-8', (err, data) => {
    const ids = JSON.parse(data)
    spamTikTok(
        ids.login,
        ids.password,
        ids.api,
        ids.token,
        1000,
        1000,
        null,
        true,
        (toLog) => {console.log(toLog)},
    ).then(() => console.log('Done !'))
})
