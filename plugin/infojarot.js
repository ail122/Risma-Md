let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : iyan
│ ✎ _Sekolah_ : Lulus
│ ✎ _Umur_ : 18
│ ✎ _Asal_ : Jawa Barat
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    https://saweria.co/IyanMd
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/E8DWoNPVE0661QG02FpYuc
│ ✎ _Youtube _:
│    https://youtube.com/channel/
│ ✎ _Instagram_ : 
│    https://instagram.com/_
│ ✎ _WhatsApp_ :
│    wa.me/6289516947204
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
