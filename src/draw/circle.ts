type Circle = {
  x: number
  y: number
  w: number
  color?: string
  lineWidth?: number
  fillColor?: string
}
type DrawCircle = (ctx: CanvasRenderingContext2D, circle: Circle) => void

export const drawCircle: DrawCircle = (
  ctx,
  { x, y, w, color = 'black', lineWidth = 1, fillColor }
): void => {
  ctx.beginPath()

  ctx.arc(x, y, w, 0, 2 * Math.PI)

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  ctx.stroke()

  if (fillColor !== undefined) {
    ctx.fillStyle = fillColor
    ctx.fill()
  }
}
