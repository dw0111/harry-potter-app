import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'

export default function App() {
  document.body.append(AppHeader('Harry Potter-App'))

  getCharacters()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
