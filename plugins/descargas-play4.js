
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `Que esta buscado? ingrese el nombre del tema\n\nEjemplo *${usedPrefix + command}* ozuna`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `tema no encontrado/ o el serve esta caido intente de nuevo`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId<
	let play = `┌───⊷ 🅟🅛🅐🅨
│📌 *𝙏𝙞𝙩𝙪𝙡𝙤* : ${title}
│📆 *𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙙𝙤:* ${ago}
│⌚ *𝘿𝙪𝙧𝙖𝙘𝙞𝙤𝙣:* ${timestamp}
│👀 *𝙑𝙞𝙨𝙩𝙖𝙨:* ${views}
│
╰─────────────────`
 await conn.sendButton(m.chat, play, lb, thumbnail, [
    ['Audio', `${usedPrefix}fgmp3 ${url}`],
    ['Video', `${usedPrefix}fgmp4 ${url}`]
  ], m, nn)
}
handler.help = ['play4']
handler.tags = ['downloader']
handler.command = ['play4', 'playvid']

export default handler