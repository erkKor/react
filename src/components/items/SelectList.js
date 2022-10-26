import React from 'react'

const SelectList = () => {

  return (
    <div class="select">
      <select name="format" id="format">
          <option selected disabled>Choose an Option</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
      </select>
    </div>
  )
}

export default SelectList