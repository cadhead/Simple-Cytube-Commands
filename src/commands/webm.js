import randomInteger from "../util/random-int"

const FETCH_PROXY = "https://yacdn.org/serve/"

const FILE_TYPE_WEBM = 6
const FILE_TYPE_MP4 = 10

const FILE_TYPES = [FILE_TYPE_WEBM, FILE_TYPE_MP4]

function addMedia(params) {
  const {user, video} = params

  if (window.CLIENT.name === user) {
    window.socket.emit("queue", {
      id: `https://2ch.pm${video.path}`,
      title: video.fullname,
      pos: "end",
      type: "fi",
      temp: true
    })
  }
}

function getRandomWebm(thread) {
  return fetchVideosFromThread(thread).then(videos => {
    return videos[randomInteger(0, videos.length - 1)]
  })
}

function fetchVideosFromThread(thread) {
  let videos = []
  return fetch(`${FETCH_PROXY}${thread}`)
    .then(res => res.json())
    .then(data => {
      for (let post of data.threads[0].posts) {
        for (let file of post.files) {
          if (FILE_TYPES.includes(file.type)) {
            videos.push(file)
          }
        }
      }

      return videos
    })
}

const CommandWebm = {
  text: "webm",
  description: "Добавляет случайное видео из треда на 2ch.hk; опция all добавит все видео из треда",
  handler: (params, data) => {
    if (!params[0]) {
      return data.context.sendHelpMessage(`Использование: !webm <thread> [all]`)
    }

    let thread = params[0].slice(0, params[0].search(".html"))
    thread += ".json"

    if (params[1] === "all") {
      fetchVideosFromThread(thread).then(videos => {
        let delay = 1000.
        let extraDelay = 3000.
        let count = 0

        let timer = setTimeout(function cb() {
          addMedia({
            user: data.username,
            video: videos[count]
          })

          count++

          if (count % 10 == 0) delay = extraDelay
          else delay = 1000.

          clearTimeout(timer)

          if (count < videos.length) timer = setTimeout(cb, delay)
        }, delay)
      })
    } else {
      getRandomWebm(thread).then(webm => {
        addMedia({
          user: data.username,
          video: webm
        })
      }).catch(() => {
        data.context.sendHelpMessage(`Не получилось добавить видео в плейлист. ${data.username}, попробуй снова.`)
      })
    }
  }
}

export default CommandWebm