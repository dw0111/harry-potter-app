import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(characterName) {
  return createElement('section', {
    className: 'Card',
    innerText: characterName,
  })
}
