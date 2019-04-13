'use strict'

import React from 'react'
import './button.css'
const Button = ({ handleClick, children, color }) => (
  <button
    className='btn'
    style={{ background: color }}
    onClick={handleClick}>{children}
  </button>
)

export default Button
