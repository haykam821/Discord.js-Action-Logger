module.exports = async (action, logChannel, commandMessage, actedUpon, reason) => {
    const actedUser = actedUpon.user ? actedUpon.user : actedUpon;
    const actorUser = commandMessage.author;

    if (logChannel) {
        return await logChannel.send("", {
            embed: {
                title: `Moderator Action: ${action}`,
                fields: [{
                    name: "Moderator",
                    value: `${actorUser.tag} / ${actorUser.author}`,
                }, {
                    name: "Channel Executed",
                    value: `#${commandMessage.channel.name} / ${commandMessage.channel}`,
                }, {
                    name: "User",
                    value: `${actedUser.tag} / ${actedUser}`,
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