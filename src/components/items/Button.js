import React from 'react'

const Button = ({theme, themeBorder}) => {
  return (
    <button className={theme}>SHOP NOW
        <div className={themeBorder}></div>
    </button>
  )
}

export default Button