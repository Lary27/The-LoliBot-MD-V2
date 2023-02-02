import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:*\n*#play quevedo quedate*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝙇𝙤𝙨 𝙨𝙞𝙚𝙣𝙩𝙤, 𝙣𝙤 𝙥𝙪𝙙𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤/𝙫𝙞𝙙𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙘𝙤𝙣 𝙤𝙩𝙧𝙤𝙨 𝙣𝙤𝙢𝙗𝙧𝙚𝙨/𝙩𝙞𝙩𝙪𝙡𝙤𝙨*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *𝗧𝗶𝘁𝘂𝗹𝗼:* ${title}
📇 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻:* ${description}
📆 *𝗣𝘂𝗯𝗹𝗶𝗰𝗮𝗰𝗶𝗼𝗻:* ${publishedTime}
⌚ *𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:* ${durationH}
👀 *𝗩𝗶𝘀𝘁𝗮𝘀:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta ${url}`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv ${url}`],
], m)
}catch(e){
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}  
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler

/*


import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `🤔𝙦𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?🤔 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚/𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n\n*—◉ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n#play lgante - bar*`
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, durationH, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play') {
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `📌 𝙏𝙞𝙩𝙪𝙡𝙤: ${title}\n📆 𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣: ${published}\n👀 𝙑𝙞𝙨𝙩𝙖𝙨: ${views}`
const buttons = [{buttonId: `#menu`, buttonText: {displayText: '🎶 𝙈𝙚𝙣𝙪 🎶'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})
}

if (command == 'play2') {
let jsonn = await ytLink.json()
let vid = await jsonn.result.video
let capt = `📌 𝙏𝙞𝙩𝙪𝙡𝙤: ${title}\n📆 𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙘𝙞𝙤𝙣: ${published}\n👀 𝙑𝙞𝙨𝙩𝙖𝙨: ${views}`
const buttons = [{buttonId: `#playlistass2 ${title}`, buttonText: {displayText: '𓃠 𝙈𝙖𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'ᴇɴᴠɪᴀɴᴅᴏ ᴠɪᴅᴇᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { video: { url: vid }, fileName: '${title}.mp4', mimetype: 'video/mp4', caption: `🔰 𝘼𝙦𝙪𝙞 𝙚𝙨𝙩𝙖 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 \n🔥 𝙏𝙞𝙩𝙪𝙡𝙤: ${title}`}, {quoted: m})
}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
export default handler
*/
