import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(character) {
  const image = createElement('img', {
    className: 'Card__image',
    src: character.image,
    height: '100',
  })
  const age = createElement('div', { className: 'Card__age Card__left-align' })
  if (character.dateOfBirth) {
    age.textContent = `Born: ${character.dateOfBirth}`
  }
  const wand = createElement('div', {
    className: 'Card__wand Card__left-align',
  })
  if (character.wand.core) {
    wand.textContent = `Wand: ${character.wand.wood} with a core of ${character.wand.core}.`
  } else if (character.wand.wood) {
    wand.textContent = `Wand: ${character.wand.wood}`
  }

  const contentSection = createElement(
    'section',
    { className: 'Card__content hidden' },
    age,
    wand,
    image
  )

  const el = createElement(
    'section',
    {
      className: 'Card',
    },
    character.name,
    contentSection
  )

  el.addEventListener('click', () => contentSection.classList.toggle('hidden'))

  return el
}
