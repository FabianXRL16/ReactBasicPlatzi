import React from 'react'

import './TodoItem.css'

export default function TodoItem({data}) {
  return (
    <li>
      <button className='btnItem'>
        <ion-icon name="checkmark-outline"></ion-icon>
      </button>
      {data.text}
    </li>
  )
}
