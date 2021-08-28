import { createCanvas } from './setup/canvas'
import { createWrapEl } from './setup/wrap'

const app = document.getElementById('app')

if (app !== null) {
  const wrap = createWrapEl()
  const canvas = createCanvas()

  wrap.append(canvas)
  app.append(wrap)
}
