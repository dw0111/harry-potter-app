import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import HouseFilter from './components/HouseFilter/Housefilter'
import CardContainer from './components/CardContainer/CardContainer'
import SearchBar from './components/SearchBar/SearchBar'
import getCharacters from './services/getCharacters'

export default function App() {
  document.body.append(AppHeader('Harry Potter-wiki'))

  document.body.append(HouseFilter(onFilterByHouse))

  document.body.append(SearchBar(showSearchedCard))

  const cardContainer = CardContainer()
  document.body.append(cardContainer)

  let characters

  getCharacters()
    .then(apiData => {
      characters = apiData
      createCards(apiData)
    })
    .catch(error => console.log(error))

  function onFilterByHouse(text) {
    createCards(characters.filter(character => character.house === text))
  }

  function showSearchedCard(inputValue) {
    createCards(characters.filter(character => inputValue === character.name))
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }
}
