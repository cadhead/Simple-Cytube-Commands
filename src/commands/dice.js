import randomInteger from "../util/random-int"

function condition(params) {
  return (
    (!params) ||
    (!Number.isInteger(params[0])) ||
    (!Number.isInteger(params[1])) ||
    (params[0] > params[1])
  )
}

export default {
  text: "dice",
  handler: (params, data) => {
    let normalizeParams = params.map(param => {
      let number = parseInt(param);
      return isNaN(number) ? param : number;
    });

    if (condition(normalizeParams)) {
      return data.bot.sendMessage("Использование: !dice <min> <max>")
    }

    let min = normalizeParams[0]
    let max = normalizeParams[1]
    let num = randomInteger(min, max)

    data.bot.sendMessage(`${data.username} бросает кости... Выпало ${num}`)
  }
}