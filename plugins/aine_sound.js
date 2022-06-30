let fs = require('fs')
let handler = async (m) => {
let helloisall = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus')
conn.sendFile(m.chat, helloisall, '', '', m, true)
}

handler.customPrefix = /^(isall)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler