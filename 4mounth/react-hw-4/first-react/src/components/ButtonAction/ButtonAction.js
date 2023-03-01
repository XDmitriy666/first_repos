import React from 'react'
import classes from './buttonaction.module.css'
const ButtonAction = ({ children, type, handleClick, todo }) => {
  return (
    <button onClick={() => handleClick(todo.id)}
     className={classes['actionButton'] + ' ' +  classes[type]}>
        {children}
    </button>
  )
}

export default ButtonAction;