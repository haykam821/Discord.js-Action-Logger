/**
 * Logs an action in an embed.
 * @param {string} action The action that is taking place.
 * @param {} logChannel The channel to log to.
 * @param {} commandMessage The message that initiated the action.
 * @param {} actedUpon The user being acted upon.
 * @param {string} reason The reason for this action.
 */
module.exports = (action, logChannel, commandMessage, actedUpon, reason) => {
	const actedUser = actedUpon.user ? actedUpon.user : actedUpon;
	const actorUser = commandMessage.author;

	if (logChannel) {
		return logChannel.send("", {
			embed: {
				color: 0x7289DA,
				fields: [{
					name: "Moderator",
					value: `${actorUser} (${actorUser.tag})`,
				}, {
					name: "User",
					value: `${actedUser} (${actedUser.tag})`,
				}, {
					name: "Reason",
					value: reason || "*No reason provided.*",
				}],
				timestamp: new Date(),
				title: "Moderator Action: " + action,
			},
		});
	}
}
