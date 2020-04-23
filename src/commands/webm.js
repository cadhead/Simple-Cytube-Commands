const FETCH_PROXY = "https://yacdn.org/serve/"

const FILE_TYPE_WEBM = 6
const FILE_TYPE_MP4 = 10

const FILE_TYPES = [FILE_TYPE_WEBM, FILE_TYPE_MP4]

function addMedia(params) {
  const {user, video} = params

  if (window.CLIENT.name === user) {
    window.socket.emit("queue", {
      id: `https://2ch.hk${video.path}`,
      title: video.fullname,
      pos: "end",
      type: "fi",
      temp: true
    })
  }
}

function getRandomWebm(thread) {
  let url = thread.slice(0, thread.search(".html"))
  url += ".json"

  return fetch(`${FETCH_PROXY}${url}`)
  .then(res => res.json())
  .then(data => {
    let videos = fetchVideosFromThread(data)
    return videos[randomInteger(0, videos.length) - 1]
  })
}

function fetchVideosFromThread(thread) {
  let videos = []

  for (let post of thread.threads[0].posts) {
    for (let file of post.files) {
      if (FILE_TYPES.includes(file.type)) {
        videos.push(file)
      }
    }
  }

  return videos
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const CommandWebm = {
  text: "webm",
  handler: (params, data) => {
    if (!params[0]) {
      return data.bot.sendMessage("Использование: !webm <thread>.")
    }

    getRandomWebm(params[0]).then(webm => {
      addMedia({
        user: data.username,
        video: webm
      })
    }).catch(() => {
      data.bot.sendMessage("Ссылка всратая. Исправляй.")
    })
  }
}

export default CommandWebm