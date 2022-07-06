import React, { useRef, useState } from 'react'

import './ModalCreateItem.css'

import { v4 as uuid } from 'uuid'

export default function ModalCreateItem({ newItem, categories, closeModal }) {
  const todoTaskRef = useRef()
  const msgRef = useRef()

  const [currentCategory, setCurrentCategory] = useState(categories[0].text)

  const changeCategory = e => {
    setCurrentCategory(e.target.value)
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value

    if (task === '') return

    newItem({ text: task, id: uuid(), category: currentCategory })
    todoTaskRef.current.value = null

    msgRef.current.style.transform = "scale(1)"
    setTimeout(() => {
      msgRef.current.style.transform = "scale(0)"
    }, 1000);
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
              <div className='Category' key={i.id} >
                <input id={i.text} type="radio" name="categories" value={i.text} checked={currentCategory === i.text ? true : false} onChange={changeCategory} />
                <span>{i.text}</span>
              </div>
            ))
          }
          </div>
        </div>
        <button className='btnAdd' onClick={handleTodoAdd}>Add Item</button>
      </div>
      <div ref={msgRef} className='MsgSuccessfully'>Task created successfully</div>
    </div>
  )
}
