import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(character) {
  const image = createElement('img', {
    className: 'Card__image',
    src: character.image,
    height: '100',
  })
  if (character.house === 'Gryffindor') {
    image.classList.add('shadow-g')
  } else if (character.house === 'Slytherin') {
    image.classList.add('shadow-s')
  } else if (character.house === 'Ravenclaw') {
    image.classList.add('shadow-r')
  } else if (character.house === 'Hufflepuff') {
    image.classList.add('shadow-h')
  } else {
    image.classList.add('shadow-b')
  }

  const age = createElement('div', { className: 'Card__left-align' })
  if (character.dateOfBirth) {
    age.textContent = `Born: ${character.dateOfBirth}`
  }
  const wand = createElement('div', {
    className: 'Card__left-align',
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
