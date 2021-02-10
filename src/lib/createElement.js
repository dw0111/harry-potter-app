export default function createElement(type, props, ...children) {
  const el = document.createElement(type)
  Object.assign(el, props)
  if (children) {
    el.append(...children)
  }
  return el
}
