import React from 'react'
import './Components.css'

function Header() {
  return (
    <div className="header-container">
      <button type="submit" className="button-aside">
        <img
          className="button-image"
          src="https://github.com/JDgomez2002/lab07_web/blob/main/img/image-1.png?raw=true"
          alt="buttonpng"
          border="0"
        />
      </button>
    </div>
  )
}

export { Header }
