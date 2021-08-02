import spamTikTok from './src/spamTikTok.js'
import fs from 'fs'

const paths = process.argv[1].split('/')
paths.pop()

fs.readFile(paths.join('/') + '/ids.json', 'utf-8', (err, data) => {
    const ids = JSON.parse(data)
        ids.login,
        ids.password,
        ids.api,
        ids.token,
        20000,
        6000,
        ids.proxy,
    ).then(() => console.log('Done !'))
})
