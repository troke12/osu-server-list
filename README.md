# osu! Private Server Listing

A list of osu! private servers.

#### How to add your server

<pre>
var items = [
  {
    name: "Name of your server",
    link: "http://yourosuserver.com",
    owner: "The owner",
    location: "City or country",
    onlineAPI: "your online users api",
    instances: 0,
    discord: "Discord invite"
  }
];
</pre>

Make sure each of your items are separate.

For `instances` there are only 2 values :
- 0 for the server who are using ripple instances
- 1 for the server using gulag
- 2 Special for Ripple only

## Development

- Clone this repository
- `npm install` to install dependencies
- `npx tailwindcss -i src/input.css -o dist/style.css --watch` for start developing

## Contributors

<a href="https://github.com/troke12/osu-server-list/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=troke12/osu-server-list" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
