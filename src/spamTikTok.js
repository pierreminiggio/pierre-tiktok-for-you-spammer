import spam from '@pierreminiggio/tiktok-for-you-spammer'

/**
 * @param {string} facebookLogin
 * @param {string} facebookPassword
 * @param {number} postScrollLength
 * @param {number} commentScrollLength
 * @param {boolean} show
 * @param {string|null} proxy
 * @param {LogFunction} sendLog
 *
 * @returns {Promise}
 */

export default function spamTikTok(
    facebookLogin,
    facebookPassword,
    postScrollLength = 20000,
    commentScrollLength= 10000,
    proxy = null,
    show = false,
    sendLog = (toLog) => {}
) {
    return new Promise(async (resolve, rejects) => {
        await spam(
            facebookLogin,
            facebookPassword,
             async (tikTok, {comment}) => {
                await comment('Salut')
            },
            postScrollLength,
            commentScrollLength,
            proxy,
            show,
            sendLog
        )
        resolve()
    })
}
