import React from 'react'

import './Categories.css'

export default function Categories({ categories, totalCountTodos }) {
  return (
    <div className="CategoriesContainer">
      <span>Categories</span>
      <div className="CategoriesList">
        {
            categories.map((i, index) => (
                <div className="CategoryItem" key={i.id}>
                    <span>
                    {totalCountTodos[index]} {totalCountTodos[index] % 2 === 0 ? 'Taks' : 'Task'}
                    </span>
                    <h2>{i.text}</h2>
                </div>
            ))
        }
      </div>
    </div>
  )
}
