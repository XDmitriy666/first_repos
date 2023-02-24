import React from 'react'
import classes from './todocard.module.css'
import Button from '../Button/Button'
const ToDoCard = ({ todo, handleDone,deleteTodo}) => {
  return (
    <div className={classes.wrapperCard}>
         <div className={todo.completed ? [ classes.todoCard, classes.done ] : classes.todoCard }>
        <h3>{todo.title}</h3>
    </div>
    <Button onClick={handleDone} id={todo.id}>Done</Button>
    <button onClick={()=>deleteTodo(todo)}>Delete</button>
    </div>
  )
}

export default ToDoCard