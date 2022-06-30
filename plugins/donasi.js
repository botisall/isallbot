let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0896-3026-7618]
│ •  [0856-9340-8116]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
