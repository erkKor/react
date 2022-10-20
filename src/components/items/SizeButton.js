import React from 'react'

const SizeButton = () => {
  return (
    <div className="radioCont">
        <h3>Size:</h3>
          <label class="radio-sizeBtn">
            <input type="radio" name="radio" />
            <span class="checkmark">
              <p>S</p>
            </span>
          </label>
          <label class="radio-sizeBtn">
            <input type="radio" name="radio" />
            <span class="checkmark">
              <p>M</p>
            </span>
          </label>
          <label class="radio-sizeBtn">
            <input type="radio" name="radio" />
            <span class="checkmark">
              <p>L</p>
            </span>
          </label>
          <label class="radio-sizeBtn">
            <input type="radio" name="radio" />
            <span class="checkmark">
              <p>XL</p>
            </span>
          </label>
    </div>
  )
}

export default SizeButton