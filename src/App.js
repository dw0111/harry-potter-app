import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import CardContainer from './components/CardContainer/CardContainer'
import SearchBar from './components/SearchBar/SearchBar'
import getCharacters from './services/getCharacters'

export default function App() {
  document.body.append(AppHeader('Harry Potter-wiki'))

  document.body.append(SearchBar(showSearchedCard))

  let characters
  getCharacters()
    .then(harryandhispeeps => {
      characters = harryandhispeeps
      createCards(characters)
    })
    .catch(error => console.log(error))

  const cardContainer = CardContainer()
  document.body.append(cardContainer)

  function showSearchedCard(inputValue) {
    createCards(characters.filter(character => inputValue === character.name))
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }
}
