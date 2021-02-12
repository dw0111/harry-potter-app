import createElement from '../../lib/createElement'
import './FilterCheckbox.css'

export default function FilterCheckbox(filterBy, value, onChangeFilter) {
  const checkbox = createElement('input', {
    type: 'checkbox',
    name: filterBy,
    value: value,
  })

  checkbox.addEventListener('change', () =>
    onChangeFilter(checkbox, filterBy, value)
  )
  const el = createElement(
    'label',
    {
      className: 'FilterCheckbox__label',
      innerText: value,
    },
    checkbox
  )

  return el
}
