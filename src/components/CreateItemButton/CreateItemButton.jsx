import React, {useRef} from 'react'

import { v4 as uuid } from 'uuid'

export default function CreateItemButton({newItem}) {
  const todoTaskRef = useRef()

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value
    if (task === '') return
        newItem({text: task, id: uuid()})
    todoTaskRef.current.value = null
  }

  return (
    <div>
      <input ref={ todoTaskRef } type="text" />
      <button onClick={handleTodoAdd }>Add Item</button>
    </div>
  )
}
