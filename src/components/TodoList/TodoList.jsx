import React from 'react'

import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({todos, text}) {
  return (
    <ul>
      {
        todos.map(i => (
          <TodoItem key={i.id} data={i} text={text} />
        ))
      }
    </ul>
  )
}
