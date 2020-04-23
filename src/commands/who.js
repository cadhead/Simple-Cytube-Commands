function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const PREFIX = [
  "Так... Ну, ",
  "Этот ебучий  "
]

const POSTFIX = [
  ", базарю!",
  ", дебильчики.",
  ", ослики."
]

export default {
  text: "who",
  handler: (params, data) => {
    if (!params[0]) {
      return data.bot.sendMessage("Использование: !who <something>.")
    }

    const userlistElems = document.getElementById("userlist").children;
    const users = []
    for (let i = 0; i < userlistElems.length; i++) {
      users.push(userlistElems[i].children[1].textContent);
    }

    let formatedMessage = PREFIX[randomInteger(0, PREFIX.length-1)] +
      `${users[randomInteger(0, users.length-1)]} — ${params[0]}` +
      POSTFIX[randomInteger(0, POSTFIX.length-1)]

    data.bot.sendMessage(formatedMessage)
  }
}