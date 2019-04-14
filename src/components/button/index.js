'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './button.css'
const Button = ({ handleClick, children, color }) => (
  <button
    className='btn'
    style={{ background: color }}
    onClick={handleClick}>{children}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Button
