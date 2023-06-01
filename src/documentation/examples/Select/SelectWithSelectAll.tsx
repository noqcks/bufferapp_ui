import React, { useState } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'

const data = [
  { _id: '1', name: 'First', selected: true },
  { _id: '2', name: 'Second', selected: true },
  { _id: '3', name: 'Third', selected: true },
  { _id: '4', name: 'Fourth', selected: true },
  { _id: '5', name: 'Fifth', selected: true },
]

/** With Select All option */
export default function ExampleSelectWithSelectAll() {
  const [items, setItems] = useState(data)

  // @ts-expect-error TS(7006) FIXME: Parameter 'option' implicitly has an 'any' type.
  const handleClick = (option) => {
    // If 'All' item is clicked, either select or deselect all items
    if (option.name === 'All') {
      const newSelectedValue = !items.every((item) => item.selected === true)
      setItems(items.map((item) => ({ ...item, selected: newSelectedValue })))
    } else {
      // If any other item is clicked, either select or deselect only that item
      setItems(
        items.map((item) => {
          if (item._id === option._id)
            return { ...item, selected: !item.selected }
          return item
        }),
      )
    }
  }

  // Create the 'All' item and determine whether it should be marked as selected or not
  const allItemsOption = {
    _id: '0',
    name: 'All',
    selected: items.every((item) => item.selected === true),
  }

  return (
    <Select
      // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
      onSelectClick={(item) => handleClick(item)}
      label="Try Select All"
      type="primary"
      multiSelect
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[allItemsOption, ...items]}
      clearSearchOnBlur
      searchInputProps={{
        clearSearchOnBlur: false,
      }}
    />
  )
}
