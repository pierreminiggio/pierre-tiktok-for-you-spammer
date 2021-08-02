import spamTikTok from './src/spamTikTok.js'
import fs from 'fs'

const paths = process.argv[1].split('/')
paths.pop()

fs.readFile(paths.join('/') + '/ids.json', 'utf-8', (err, data) => {
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
        (toLog) => {console.log(toLog)}
    ).then(() => console.log('Done !'))
})
