export const createWrapEl = (): HTMLDivElement => {
  const wrap = document.createElement('div')
  wrap.classList.add('wrap')

  return wrap
}
