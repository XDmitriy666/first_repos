import React from 'react'
import classes from './modal.module.css'


const Modal = ({children, handleShow}) => {
  return (
  <>
    <div onClick={handleShow} className={classes.modal__wrapper}></div>
    <div  className={classes.modal__content}>
        {children}
    </div>
  </>
  )
}

export default Modal