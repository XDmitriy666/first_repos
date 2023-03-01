import React from 'react'
import ToDoCard from '../TodoCard/ToDoCard'

const List = ({ 
  list, 
  handleDone,
   handleDelete, 
   currentEdit, 
   handleChangeCurrent,
  handleEdit  
  }) => {
  return (
    <>
    {list.map(todo => <ToDoCard 
    key={todo.id} 
    todo={todo} 
    handleChangeCurrent={handleChangeCurrent}
    handleDone={handleDone}
    handleDelete={handleDelete}
    currentEdit={todo.id === currentEdit}
    handleEdit={handleEdit}
    />)}
    </>
  )
}

export default List