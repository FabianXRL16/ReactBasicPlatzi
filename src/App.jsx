import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'

import './App.css'

import Data from './layout/Data/Data'
import Settings from './layout/Settings/Settings'

export function App() {
  const [todos, setTodos] = useState([])
  const [categories, setCategories] = useState([{id: uuid(), text: 'Personal'},{id: uuid(), text: 'Work'}])
  const [totalCountTodos, setTotalCountTodos] = useState([])

  
  const newItem = (task) => {
    setTodos((prevTodos) => {
      return [...prevTodos, task ]
    })
    totalTodos()
  }

  function totalTodos() {
    let arr = []
    categories.map(category => {
      let count = 0
      count = todos.filter(todo => (
        todo.category === category.text
      )).length
      arr.push(count)
    })
    setTotalCountTodos(arr)
  }

  const nameUser = 'Fabian'

  return (
    <div className="App">
      <Settings />
      <Data newItem={newItem} todos={todos} categories={categories} nameUser={nameUser} totalCountTodos={totalCountTodos} />
    </div>
  );
}
