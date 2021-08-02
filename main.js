import spamTikTok from './src/spamTikTok.js'

const args = process.argv

if (args.length !== 6 && args.length !== 7) {
    console.log('Use like this : node main.js <login> <password> <api> <token> [proxy]')
    process.exit()
}

spamTikTok(
    args[2],
    args[3],
    args[4],
    args[5],
    30000,
    6000,
    args.length === 7 ? args[6] : null
).then(() => console.log('Done !'))
