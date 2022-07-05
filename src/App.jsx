import TodoCounter from './components/TodoCounter/TodoCounter'
import TodoSearch from './components/TodoSearch/TodoSearch'
import TodoList from './components/TodoList/TodoList'
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton'
import CreateItemButton from './components/CreateItemButton/CreateItemButton'

import React, { useState } from 'react'

export function App() {
  const [todos, setTodos] = useState([])
  
  const newItem = (task) => {
    setTodos((prevTodos) => {
      return [...prevTodos, task ]
    })
  }


  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <CreateItemButton newItem={newItem} />
      <TodoList todos={ todos } />
      <CreateTodoButton />
    </div>
  );
}
