import createElement from '../../lib/createElement'
import Button from '../Button/Button'
import './HouseFilter.css'

export default function HouseFilter(onFilterByHouse) {
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

  const buttons = houses.map(house => {
    return Button(house, onFilterByHouse)
  })
  const el = createElement('div', { className: 'HouseFilter' }, ...buttons)

  return el
}
