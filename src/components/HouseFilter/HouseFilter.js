import createElement from '../../lib/createElement'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './HouseFilter.css'

export default function HouseFilter(onChangeFilter) {
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

  const checkboxes = houses.map(house => {
    return FilterCheckbox('house', house, onChangeFilter)
  })
  const el = createElement('div', { className: 'HouseFilter' }, ...checkboxes)

  return el
}
