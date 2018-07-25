module.exports = async (action, logChannel, commandMessage, actedUpon, reason) => {
    if (logChannel) {
        return await logChannel.send("", {
            embed: {
                title: `Moderator Action: ${action}`,
                fields: [{
                    name: "Moderator",
                    value: `${commandMessage.author.tag} / ${commandMessage.author}`,
                }, {
                    name: "Channel Executed",
                    value: `#${commandMessage.channel.name} / ${commandMessage.channel}`,
                }, {
                    name: "User",
                    value: `${actedUpon.user.tag} / ${actedUpon}`,
                }, {
                    name: "Reason",
                    value: reason || "*No reason provided.*",
                }],
                color: 0x7289DA,
                timestamp: new Date(),
            }
        });
    }
}