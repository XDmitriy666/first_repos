import React from 'react'
import classes from './button.module.css';
const Button = ({ children, onClick, id }) => {
  return (
    <button onClick={() => onClick(id)} className={classes.addButton}>{children}</button>
  )
}

export default Button

