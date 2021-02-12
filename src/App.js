import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import HouseFilter from './components/HouseFilter/Housefilter'
import CardContainer from './components/CardContainer/CardContainer'
import SearchBar from './components/SearchBar/SearchBar'
import getCharacters from './services/getCharacters'

export default function App() {
  document.body.append(AppHeader('Harry Potter-wiki'))

  document.body.append(HouseFilter(onChangeFilter))

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

  function onChangeFilter(checkbox, filterBy, value) {
    if (checkbox.checked) {
      characters = characters.map(card => {
        if (card[filterBy] === value) {
          card.checked = true
          return card
        } else {
          return card
        }
      })
    } else {
      characters = characters.map(card => {
        if (card[filterBy] === value) {
          card.checked = false
          return card
        } else {
          return card
        }
      })
    }
    if (characters.filter(card => card.checked === true).length === 0) {
      createCards(characters)
    } else {
      createCards(characters.filter(card => card.checked === true))
    }
  }

  function showSearchedCard(inputValue) {
    createCards(
      characters.filter(character => character.name.includes(inputValue))
    )
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
    return cards
  }
}
