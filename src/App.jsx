import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'

import './App.css'

import Data from './layout/Data/Data'
import Settings from './layout/Settings/Settings'

export function App() {
  const [todos, setTodos] = useState([])
  const [categories, setCategories] = useState([{id: uuid(), text: 'Personal'},{id: uuid(), text: 'Work'}])
  
  const newItem = (task) => {
    setTodos((prevTodos) => {
      return [...prevTodos, task ]
    })
  }

  const nameUser = 'Fabian'

  return (
    <div className="App">
      <Settings />
      <Data newItem={newItem} todos={todos} categories={categories} nameUser={nameUser} />
    </div>
  );
}
