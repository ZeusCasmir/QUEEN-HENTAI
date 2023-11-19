let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🔊 Group : *${groupMetadata.subject}*\n🔊 Members : *${participants.length}*${text ? `\n🔊 Message : ${text}\n` : ''}\n┌──Let's Go ⚡*\n` + users.map(v => '_ @' + v.replace(/@.+/, '')).join`\n` + '\n└──* ✅ *──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
