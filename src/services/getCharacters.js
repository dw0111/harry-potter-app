export default async function getCharacters() {
  return fetch('https://hp-api.herokuapp.com/api/characters').then(res =>
    res.json()
  )
}
