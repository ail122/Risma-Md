let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Alpi* ´ˎ˗
│ ✎ _Nama_ : iyan
│ ✎ _Sekolah_ : lulus
│ ✎ _Umur_ : 18
│ ✎ _Asal_ : Jabar
│ ✎ _Status_ : gkad
│ ✎ _WhatsApp_ :
│    wa.me/6289516947204
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
