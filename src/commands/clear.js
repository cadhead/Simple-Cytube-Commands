export default {
  text: "clear",
  description: "Локально очищает чат",
  handler: (params, data) => {
    if (window.CLIENT.name === data.username) {
      document.querySelector("#messagebuffer").innerHTML = ""
      data.context.sendMessage("You cleared chat.")
    }
  }
}