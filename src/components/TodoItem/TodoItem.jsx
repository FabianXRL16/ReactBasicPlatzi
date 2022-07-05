import React from 'react'

// import li from './TodoItem.css'
import './TodoItem.css'

export default function TodoItem({data, text}) {
  return (
    // <li style={li}>{text} - {data.text}</li>
    <li>{text} - {data.text}</li>
  )
}
