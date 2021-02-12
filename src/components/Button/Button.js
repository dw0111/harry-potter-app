import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(text, onFilterByHouse) {
  const el = createElement('button', {
    className: 'Button bshadow',
    innerText: text,
  })

  el.addEventListener('click', () => {
    toggleActive()
    onFilterByHouse(text)
  })

  function toggleActive() {
    el.classList.toggle('active')
  }

  return el
}
