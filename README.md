# osu! Private Server Listing

[![dc](https://discordapp.com/api/guilds/982916832954568714/widget.png?style=shield)](https://discord.gg/YJs9qkStGB)

A list of osu! private servers.

#### How to add your server

<pre>
var items = [
  {
    name: "Name of your server",
    link: "http://yourosuserver.com",
    owner: "The owner",
    location: "Country like ID,US",
    onlineAPI: "your online users api",
    instances: 0,
    discord: "Discord invite",
    logo: "https://yourlogo.com/logo.png"
  }
];
</pre>

Make sure each of your items are separate.

For `instances` there are only 2 values :
- 0 for the server who are using ripple instances
- 1 for the server using gulag
- 2 Special for Ripple only (do not use)

## Development

- Clone this repository
- `npm install` to install dependencies
- `npx tailwindcss -i src/input.css -o dist/style.css --watch` for start developing

## Contributors

<a href="https://github.com/troke12/osu-server-list/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=troke12/osu-server-list" />
</a>
