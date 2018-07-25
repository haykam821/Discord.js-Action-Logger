# Discord.js Action Logger

A template for action logs with Discord.js.

## Installation

It's on NPM, so you can just do this:

    npm install discord.js-action-logger --save

## Usage

Call the function like this:

```js
const actlog = require("discord.js-action-logger");
actlog("Kick", channel, moderationMessage, actedUpon, reason).then(resolved => {
	channel.send("That user has been kicked out of the server.");
});
```

Here is an example of what the formed embed will look like:

![](https://i.imgur.com/ulUlLQM.png)
