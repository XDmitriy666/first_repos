import React from 'react'
import ToDoCard from '../TodoCard/ToDoCard'

const List = ({ list, handleDone,deleteTodo,handleSearchs }) => {
  return (
    <>
    {handleSearchs.map((todo) => <ToDoCard
    key={todo.id} 
    todo={todo} 
    handleDone={handleDone}
    deleteTodo={deleteTodo}
    handleSearchs={handleSearchs}
    />)}
    </>
  )
}

export default List