let fs = require('fs')
let handler = async (m) => {
let helloisall = fs.readFileSync('./mp3/kawai.opus')
conn.sendFile(m.chat, helloisall, '', '', m, true)
}

handler.customPrefix = /^(kawai|kawaii)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler