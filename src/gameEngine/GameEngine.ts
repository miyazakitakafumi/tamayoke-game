type GameEngine = () => {
  play: () => void
  pause: () => void
  isPlay: () => boolean
}

export const GameEngine: GameEngine = () => {
  let isRunning = false

  const play = () => {
    isRunning = true
  }

  const pause = () => {
    isRunning = false
  }

  const isPlay = () => isRunning

  return {
    play,
    pause,
    isPlay,
  }
}
