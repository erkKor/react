import React from 'react'

const SizeButton = () => {
  return (
    <div className="radioCont">
      <label className="radio-sizeBtn">
        <input type="radio" name="radio" />
        <span className="checkmark">
          <p>S</p>
        </span>
      </label>
      <label className="radio-sizeBtn">
        <input type="radio" name="radio" />
        <span className="checkmark">
          <p>M</p>
        </span>
      </label>
      <label className="radio-sizeBtn">
        <input type="radio" name="radio" />
        <span className="checkmark">
          <p>L</p>
        </span>
      </label>
      <label className="radio-sizeBtn">
        <input type="radio" name="radio" />
        <span className="checkmark">
          <p>XL</p>
        </span>
      </label>
    </div>
  )
}

export default SizeButton