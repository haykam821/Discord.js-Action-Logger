/**
 * Logs an action in an embed.
 * @param {string} action The action that is taking place.
 * @param {djs.Channel} logChannel The channel to log to.
 * @param {djs.Message} commandMessage The message that initiated the action.
 * @param {(djs.User | djs.Member)} actedUpon The user being acted upon.
 * @param {string} reason The reason for this action.
 * @returns {Promise<djs.Message>} A promise that resolves with the sent action log.
 */
function logAction(action, logChannel, commandMessage, actedUpon, reason) {
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
module.exports = logAction;