import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import getCharacters from './services/getCharacters'

export default function App() {
  document.body.append(AppHeader('Harry Potter-wiki'))

  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => console.log(error))
}

function createCards(characters) {
  const cards = characters.map(character => Card(character))
  document.body.append(...cards)
}
