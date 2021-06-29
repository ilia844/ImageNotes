import React from 'react'

import './button.scss'

export const Button = ({ children, onClick, className, disabled, invert }) => {
  return (
    <button
      className={`btn ${className ? className : ''} ${
        invert ? 'btn_invert' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
