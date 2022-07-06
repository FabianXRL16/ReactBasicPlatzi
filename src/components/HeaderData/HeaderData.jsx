import React from 'react'

import './HeaderData.css'

export default function HeaderData() {
  return (
    <div className='HeaderData'>
        <button>
            <ion-icon name="menu-outline"></ion-icon>
        </button>
        <button>
            <ion-icon name="search-outline"></ion-icon>
        </button>
    </div>
  )
}
