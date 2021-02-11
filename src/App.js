import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import HouseFilter from './components/HouseFilter/Housefilter'
import createElement from './lib/createElement'
import getCharacters from './services/getCharacters'

export default function App() {
  document.body.append(AppHeader('Harry Potter-wiki'))

  document.body.append(HouseFilter(onFilterByHouse))

  const cardContainer = createElement('div', { className: 'cardContainer' })
  document.body.append(cardContainer)

  let characters

  getCharacters()
    .then(apiData => {
      createCards(apiData)
      characters = apiData
    })
    .catch(error => console.log(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    document.body.append(...cards)
  }

  function onFilterByHouse(text) {
    const cards = characters
      .filter(character => character.house === text)
      .map(character => Card(character))
    document.body.append(...cards)
  }
}
