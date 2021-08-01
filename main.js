import spamTikTok from './src/spamTikTok.js'
import fs from 'fs'

fs.readFile('./ids.json', 'utf-8', (err, data) => {
    const ids = JSON.parse(data)
    spamTikTok(
        ids.login,
        ids.password,
        ids.api,
        ids.token,
        2000,
        6000,
        ids.proxy,
    ).then(() => console.log('Done !'))
})
