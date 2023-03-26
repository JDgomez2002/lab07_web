import React from 'react'
import './Fragments.css'
import { ImageButton, NavBar, InformationFooterContainer } from './Components'

function Header() {
  const hornImageSrc = 'https://github.com/JDgomez2002/lab07_web/blob/main/img/image-1.png?raw=true'
  const displayMenuImageSrc = 'https://github.com/JDgomez2002/lab07_web/blob/main/img/image-2.png?raw=true'

  return (
    <div className="header-container">
      <ImageButton imageSrc={hornImageSrc} />
      <ImageButton imageSrc={displayMenuImageSrc} />
    </div>
  )
}

function Body() {
  return (
    <div className="body-div-container">
      <NavBar />
    </div>
    // Here will going to be all body components
  )
}

function Footer() {
  return (
    <InformationFooterContainer />
  )
}

export { Header, Body, Footer }
