export const createCanvas = (): HTMLCanvasElement => {
  const CANVAS_W = 600
  const CANVAS_H = 600

  const canvas = document.createElement('canvas')
  canvas.width = CANVAS_W
  canvas.height = CANVAS_H
  canvas.classList.add('canvas')

  return canvas
}
