import React, { useState } from 'react'

// import TodoCounter from '../../components/TodoCounter/TodoCounter'
// import TodoSearch from '../../components/TodoSearch/TodoSearch'
import TodoList from '../../components/TodoList/TodoList'
import CreateTodoButton from '../../components/CreateTodoButton/CreateTodoButton'
import ModalCreateItem from '../../components/ModalCreateItem/ModalCreateItem'
import Title from '../../components/Title/Title'
import HeaderData from '../../components/HeaderData/HeaderData'

import './Data.css'

export default function Data({todos, categories, newItem, nameUser}) {
  const [showModalAddItem, setShowModalAddItem] = useState(false)
  
  function showModal() {
    setShowModalAddItem(true)
  }

  function closeModal() {
    setShowModalAddItem(false)
  }

  return (
    <div className='Data'>
      <HeaderData />
      <Title title={`What's up, ${nameUser}!`} />
      {/* <TodoCounter /> */}
      {/* <TodoSearch /> */}
      {
        showModalAddItem ? <ModalCreateItem newItem={newItem} categories={categories} closeModal={closeModal} /> : ''
      }
      <button onClick={showModal} className='addItem'>+</button>
      {
        todos.length === 0
          ? <p>No hay Todos</p>
          : <TodoList todos={ todos } text={'Hola'} />
      }
      <CreateTodoButton />
    </div>
  )
}
