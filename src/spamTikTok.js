import fetch, { Headers } from 'node-fetch'
import spam from '@pierreminiggio/tiktok-for-you-spammer'

/**
 * @param {string} facebookLogin
 * @param {string} facebookPassword
 * @param {string} api
 * @param {string} token
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
    api,
    token,
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

                try {
                    await fetch(api + '/save', {
                        method: 'POST',
                        headers: new Headers({
                            Authorization: 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify(tikTok)
                    })
                } catch (e) {
                    console.error('Error while saving : ')
                    console.error(e)

                    return
                }

                const tikTokLink = tikTok.link

                let commentResponse
                try {
                    commentResponse = await fetch(api + '/generate-random-comment', {
                        method: 'POST',
                        headers: new Headers({
                            Authorization: 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({
                            link: tikTokLink
                        })
                    })
                } catch (e) {
                    console.error('Error while generating comment : ')
                    console.error(e)

                    return
                }

                if (! commentResponse) {
                    console.error('Empty comment response')

                    return
                }

                const commentContent = await commentResponse.text()

                if (! commentContent) {
                    console.error('Empty comment')

                    return
                }

                await comment(commentContent)

                try {
                    await fetch(api + '/save-comment', {
                        method: 'POST',
                        headers: new Headers({
                            Authorization: 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({
                            link: tikTokLink,
                            comment: commentContent
                        })
                    })
                } catch (e) {
                    console.error('Error while generating comment : ')
                    console.error(e)

                    return
                }

                console.log('Done for ' + tikTokLink + ' !')
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
