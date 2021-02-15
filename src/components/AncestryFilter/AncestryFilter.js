import createElement from '../../lib/createElement'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './AncestryFilter.css'

export default function AncestryFilter(onChangeFilter) {
  const ancestries = ['half-blood', 'muggleborn', 'pure-blood', 'squib']

  const checkboxes = ancestries.map(ancestry => {
    return FilterCheckbox('ancestry', ancestry, onChangeFilter)
  })
  const el = createElement(
    'div',
    { className: 'AncestryFilter' },
    ...checkboxes
  )

  return el
}
