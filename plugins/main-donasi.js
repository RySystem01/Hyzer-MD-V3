let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
››╭─〘 *Donasi* 〙
╭╡📮: DONASI
│┝‷✧ *Ovo:* 085828764046
│┝‷✧ *Dana:* 085828764046
│┝‷✧ *Gopay:* 085828764046
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor owner
╰──────────···───
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🧸 YouTube 🧸', url: syt}},
    {index: 2, urlButton: {displayText: '💬 Instagram 💬', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group 🌎', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
