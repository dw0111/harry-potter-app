import createElement from '../../lib/createElement'

export default function SearchBar(showSearchedCard) {
  const input = createElement('input', {
    className: 'SearchBar__input',
    placeholder: 'Search for ...',
  })
  const button = createElement('button', {
    className: 'SearchBar__button',
    innerText: 'Accio character!',
  })
  const el = createElement('div', { className: 'SeachBar' }, input, button)

  button.addEventListener('click', () => showSearchedCard(input.value))

  return el
}
