import React from 'react'
import './Fragments.css'
import { ImageButton, SearchBar, InfoFooterContainer } from './Components'

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
  const logoImageSrc = 'https://github.com/JDgomez2002/lab07_web/blob/main/img/image-3.png?raw=true'

  return (
    <div className="body-div-container">
      <SearchBar imageSrc={logoImageSrc} />
    </div>
    // Here will going to be all body components
  )
}

function Footer() {
  return (
    <InfoFooterContainer />
  )
}

export { Header, Body, Footer }
