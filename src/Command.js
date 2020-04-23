class Command {
  constructor(config) {
    Object.assign(this, {
      text: "",
      handler: () => {}
    }, config)
  }

  recieve(params, data) {
    this.handler(params, data)
  }
}

export default Command;