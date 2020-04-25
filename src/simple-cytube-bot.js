import filterMessage from "./util/message-filter"
import stringifyStyles from "./util/stringifyStyles"
import randomInteger from "./util/random-int"

import Command from "./Command"

import CommandDice from "./commands/dice"
import CommandWebm from "./commands/webm"
import CommandWho from "./commands/who"

class Bot {
  constructor(config) {
    Object.assign(this, {
      name: "Bot",
      cmdFilterPrefix: "!",
      messageStyles: {
        name: {
          color: "pink"
        }
      },
      randomReplies: []
    }, config)

    this.commands = []
    this.botSendMessage = false

    try {
      this.registerListeners(config.socket)
      this.registerDefaultCommnds()
      this.applyBotMessageStyles()

      console.log("Simple Cytube Bot successfuly initialzed!")
    } catch (err) {
      console.log("Simple Cytube Bot can't be initialzed.")
      
      throw new Error(err)
    }
  }

  registerListeners(socket) {
    socket.on("chatMsg", data => {
      if (this.botSendMessage) {
        this.botSendMessage = false
        window.LASTCHAT.name = ""
      }

      if (this.randomReplies.length) {
        this.randomReply(data)
      }

      if (data.msg[0] === this.cmdFilterPrefix) {
        this.commandDispatch(data)
      }
    })
  }

  registerDefaultCommnds() {
    this.commandRegister(CommandDice)
    this.commandRegister(CommandWebm)
    this.commandRegister(CommandWho)
  }

  applyBotMessageStyles() {
    let elementStyle = document.createElement("style");
    let messageStyles = stringifyStyles(this.messageStyles.message)
    let nameStyles = stringifyStyles(this.messageStyles.name)

    elementStyle.innerHTML = "/* Simple Cytube Bot Styles */ "
    elementStyle.innerHTML += `.chat-msg-bot { ${messageStyles} }`
    elementStyle.innerHTML += `.bot-name { ${nameStyles} }`

    document.head.appendChild(elementStyle)
  }

  commandRegister(config) {
    this.commands.push(new Command(config))
  }

  commandDispatch(data) {
    let split = filterMessage(data.msg).split(" ")
    let cmdText = split.shift().slice(1)
    let params = split

    this.commands.find(cmd => {
      if (cmd.text === cmdText) {
        data.bot = this;

        cmd.recieve(params, data)
      }
    })
  }

  sendMessage(message) {
    if (window.CLIENT.name === window.LASTCHAT.name) {
      let formatedMessage = `[botmsg][botname]${this.name}: [/botname]${message}[/botmsg]`
      this.socket.emit("chatMsg", { msg: formatedMessage })
    }

    this.botSendMessage = true
  }

  randomReply(data) {
    const { username } = data

    if (username === "[server]") return
    if (this._randomReplyCD > Date.now()) return

    if (Date.now().toString()[12] > 5) {
      this.sendMessage(
        `${username}: ` +
        this.randomReplies[randomInteger(0, this.randomReplies.length-1)]
      )

      this._randomReplyCD = Date.now() + 60 * 3 * 1000
    }
    
  }
}

window.SimpleCytubeBot = Bot;