import React, { useState } from 'react'

const QuantityButton = () => {

    const [quantity, setQuantity] = useState(1)

    const handleDecrement = () =>{
        if(quantity > 1){
        setQuantity(prevCount => prevCount - 1)
        }
    }
    const handleIncrement = () =>{
        if(quantity < 10){
        setQuantity(prevCount => prevCount + 1)
        }
    }

  return (
    <div className='qty-btn'>
        <button type='button' onClick={handleDecrement}>-</button>
        {/* <input type='text' placeholder= max="10"/> */}
        <div className="input">{quantity}</div>
        <button type='button'  onClick={handleIncrement}>+</button>
    </div>
  )
}

export default QuantityButton