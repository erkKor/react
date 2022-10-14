import React from 'react'
import PropTypes from 'prop-types'

const Button = ({theme, themeBorder}) => {
  return (
    <button className={theme}>SHOP NOW
        <div className={themeBorder}></div>
    </button>
  )
}

Button.propTypes = {
    theme: PropTypes.string,
    themeBorder: PropTypes.string,
}

export default Button