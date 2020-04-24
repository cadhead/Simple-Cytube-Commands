# Simple-Cytube-Bot
Very simple client side cytube bot.

### Installation ###

#### CDN install (via jsdelivr)

```js
$.getScript("https://cdn.jsdelivr.net/gh/cadhead/Simple-Cytube-Bot@master/dist/simple-cytube-bot.js",
  function() {
    window.bot = new SimpleCytubeBot({ socket: socket })
  })
```
#### Self build
for build minified version (using [parcel](https://github.com/parcel-bundler/parcel))
```
git clone https://github.com/cadhead/Simple-Cytube-Bot.git
npm run build
```

### Basic Usage Example ###

#### Configuraion
```js
$.getScript("https://cdn.jsdelivr.net/gh/cadhead/Simple-Cytube-Bot@master/dist/simple-cytube-bot.js",
  function() {
    window.bot = new SimpleCytubeBot({ 
      socket: socket,
      name: "Bot",
      cmdFilterPrefix: "!",
      messageStyles: {
        message: { background: "pink" },
        name: { color: "pink" }
      }
    })
  })
```
#### Add custom commands
```js
window.bot /* we declare this previously (see configuration) */
  .commandRegister({
    text: "help"
    handler: (params, data) => {
      // params it's all words after "!help"
      // e.g. !help my cool params = !help params[0] params[1] params[2]
      
      // data contains information about user
      // { username, msg, meta, timestamp }
      
      // you also can use bot's methods, using data.bot
      // e.g. data.bot.sendMesage("Hello world!")
    }
  })
```

### License ###

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
