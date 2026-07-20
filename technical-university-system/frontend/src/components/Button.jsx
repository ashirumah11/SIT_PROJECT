import React from 'react'

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`site-button ${variant}`} {...props}>
      {children}
    </button>
  )
}

export default Button
