import classes from './input.module.css'

const Input = ({handleNewTask}) => {

  return (
    <div>
      <input onChange={(event) => handleNewTask(event.target.value)} className={classes.input} type='text' placeholder='add' />
      <span></span>
    </div>
  )
}

export default Input