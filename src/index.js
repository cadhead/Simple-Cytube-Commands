import filterMessage from "./util/message-filter"

import Command from "./Command"

import CommandDice from "./commands/dice"
import CommandWebm from "./commands/webm"
import CommandHelp from "./commands/help"

class SimpleCytubeCommands {
  constructor(config) {
    Object.assign(this, {
      cmdFilterPrefix: "!",
      messageStyles: {
        name: {
          color: "pink"
        }
      },
    }, config)

    this.commands = []

    try {
      this.registerListeners(config.socket)
      this.registerDefaultCommands()

      console.log("Simple Cytube Bot successfuly initialized!")
    } catch (err) {
      console.log("Simple Cytube Bot can't be initialized.")
      
      throw new Error(err)
    }
  }

  registerListeners(socket) {
    socket.on("chatMsg", data => {
      if (data.msg[0] === this.cmdFilterPrefix) {
        this.commandDispatch(data)
      }
    })
  }

  registerDefaultCommands() {
    this.commandRegister(CommandDice)
    this.commandRegister(CommandWebm)
    this.commandRegister(CommandHelp)
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
        data.context = this;

        cmd.recieve(params, data)
      }
    })
  }

  sendMessage(message) {
    this.socket.emit("chatMsg", { msg: message })
  }

  sendHelpMessage(message) {
    message = message.replace(/</g, '&#60;').trim();
    message = message.replace(/>/g, '&#62;').trim();

    window.addChatMessage({ username: "[server]", meta: {
      addClass: "server-whisper",
      addClassToNameAndTimestamp: true
    }, msg: message, time: new Date() + 5 })

    if (window.SCROLLCHAT) {
      window.scrollChat();
    }
  }
}

window.SimpleCytubeCommands = SimpleCytubeCommands;
