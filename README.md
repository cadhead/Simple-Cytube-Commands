# Simple-Cytube-Commands
Custom commands handler for Cytube.

### Installation ###

#### CDN install (via jsdelivr)

```js
$.getScript("https://cdn.jsdelivr.net/gh/cadhead/Simple-Cytube-Commands@master/dist/scc.min.js",
  function() {
    window.MyCustomCommands = new SimpleCytubeCommands({ socket: socket })
  })
```
#### Self build
for build minified version (using [parcel](https://github.com/parcel-bundler/parcel))
```
git clone https://github.com/cadhead/Simple-Cytube-Commands.git
npm run build
```

### Basic Usage Example ###

#### Configuraion
```js
$.getScript("https://cdn.jsdelivr.net/gh/cadhead/Simple-Cytube-Commands@master/dist/scc.min.js",
  function() {
    window.MyCustomCommands = new SimpleCytubeCommands({ 
      socket: socket,
      filterPrefix: "!"
    })
  })
```
#### Add commands
```js
window.MyCustomCommands /* we declare this previously (see configuration) */
  .commandRegister({
    text: "help",
    description: "Just another custom command.",
    handler: (params, data) => {
      // params it's all words after "!help"
      // e.g. !help my cool params = !help params[0] params[1] params[2]
      
      // data contains information about user and message
      // { username, msg, meta, timestamp }
    }
  })
```

### License ###

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
