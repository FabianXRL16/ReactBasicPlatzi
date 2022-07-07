import React from 'react'

import TodoItem from '../TodoItem/TodoItem'

import './TodoList.css'

export default function TodoList({todos}) {
  return (
    <div className='List'>
      <span>All tasks</span>
      <ul>
      {
        todos.map(i => (
          <TodoItem key={i.id} data={i} />
        ))
      }
    </ul>
    </div>
  )
}
