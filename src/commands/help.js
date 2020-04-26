export default {
  text: "help",
  description: "Показывает это сообщение",
  handler: (params, data) => {
    let description = "Использование комманд:\n";

    for (let cmd of data.context.commands) {
      if (params[0]) {
        if (cmd.text === params[0]) description += cmd.description
      } else {
        description += `${cmd.text} — ${cmd.description}\n`
      }
    }

    data.context.sendHelpMessage(description)
  }
}
