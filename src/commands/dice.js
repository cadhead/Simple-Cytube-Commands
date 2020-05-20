import randomInteger from "../util/random-int"

function condition(params) {
  return (
    (!params) ||
    (!Number.isInteger(params[0])) ||
    (!Number.isInteger(params[1])) ||
    (params[0] > params[1])
  )
}

const CommandDice = {
  text: "roll",
  description: "Выводит случайно число от <min> до <max>",
  handler: (params, data) => {
    let normalizeParams = params.map(param => {
      let number = parseInt(param);
      return isNaN(number) ? param : number;
    });

    if (condition(normalizeParams)) {
      return data.context.sendHelpMessage(`Использование !dice <min> <max>`)
    }

    let min = normalizeParams[0]
    let max = normalizeParams[1]
    let num = randomInteger(min, max)

    if (window.CLIENT.name === data.username) {
      data.context.sendMessage(`/me бросает кости... Выпало ${num}`)
    }
  }
}

export default CommandDice