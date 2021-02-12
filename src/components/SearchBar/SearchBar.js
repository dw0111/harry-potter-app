import createElement from '../../lib/createElement'
import './SearchBar.css'

export default function SearchBar(showSearchedCard) {
  const input = createElement('input', {
    className: 'SearchBar__input bshadow',
    placeholder: 'Search for ...',
  })

  const el = createElement('div', { className: 'SearchBar' }, input)

  input.addEventListener('input', () => showSearchedCard(input.value))

  return el
}
