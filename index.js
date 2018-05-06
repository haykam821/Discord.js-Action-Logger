module.exports = (action, logChannel, commandMessage, actedUpon, reason) => {
    return new Promise(async resolve => {
        if (logChannel) {
            logChannel.send("", {
                embed: {
                    title: `Moderator Action: ${action}`,
                    fields: [{
                            name: "Moderator",
                            value: `${commandMessage.author.tag} / ${commandMessage.author}`,
                        },
                        {
                            name: "Channel Executed",
                            value: `#${commandMessage.channel.name} / ${commandMessage.channel}`,
                        },
                        {
                            name: "User",
                            value: `${actedUpon.user.tag} / ${actedUpon}`,
                        },
                        {
                            name: "Reason",
                            value: reason,
                        }
                    ],
                    color: 0x7289DA,
                    timestamp: new Date(),
                }
            }).then(e => {
                resolve(e);
            });
        }
    });
}