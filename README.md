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
