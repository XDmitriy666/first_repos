import classes from './button.module.css'

const Button = ({children, handleShow}) => {
  return (
    <button onClick={handleShow} className={classes.addBtn}>{children}</button>
  )
}

export default Button