import React, { useRef } from 'react'

import './ModalCreateItem.css'

import { v4 as uuid } from 'uuid'

export default function ModalCreateItem({ newItem, categories, closeModal }) {
  const todoTaskRef = useRef()

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value
    if (task === '') return
    newItem({ text: task, id: uuid() })
    todoTaskRef.current.value = null
  }

  return (
    <div className="SpaceCreateItem">
      <button className='CloseModal' onClick={closeModal}>
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div className="ModalAddItem">
        <input className='Search' ref={todoTaskRef} type="text" placeholder='New task...' />
        <div className='ContainerCategories'>
          <label>Categories</label>
          <div className='Categories'>
          {
            categories.map(i => (
              <div className='Category' key={i.id}>
                <input type="radio" name="categories" />
                <span>{i.text}</span>
              </div>
            ))
          }
          </div>
        </div>
        <button className='btnAdd' onClick={handleTodoAdd}>Add Item</button>
      </div>
    </div>
  )
}
