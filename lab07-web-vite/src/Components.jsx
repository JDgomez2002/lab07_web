import React from 'react'
import './Components.css'
import PropTypes from 'prop-types'

function ImageButton({ imageSrc }) {
  return (
    <button type="submit" className="button-aside">
      <img
        className="button-image"
        src={imageSrc}
        alt="buttonpng"
        border="0"
      />
    </button>
  )
}

function LinkButton({ imageSrc }) {
  return (
    <a
      type="submit"
      className="logo-link"
      href="https://duckduckgo.com/about"
    >
      <img
        className="logo-image"
        src={imageSrc}
        alt="logoPng"
        border="0"
      />
    </a>
  )
}

function SearchInput() {
  const magnifyingImgSrc = 'https://github.com/JDgomez2002/lab07_web/blob/main/img/image-4.png?raw=true'

  return (
    <div className="searchBar-div-container">
      <div className="input-container">
        <input className="input-aside" />
      </div>
      <input
        type="image"
        className="image-into-search-button"
        src={magnifyingImgSrc}
        alt="Submit feedback"
        border="0"
      />
    </div>
  )
}

function SearchBar({ imageSrc }) {
  return (
    <>
      <LinkButton imageSrc={imageSrc} />
      <SearchInput />
    </>
  )
}

function InfoFooterContainer() {
  return (
    <h1>Still working on the Duck Duck Go page! but the ESlint files are ready...</h1>
  )
}

ImageButton.propTypes = {
  imageSrc: PropTypes.string,
}

ImageButton.defaultProps = {
  imageSrc: '',
}

SearchBar.propTypes = {
  imageSrc: PropTypes.string,
}

SearchBar.defaultProps = {
  imageSrc: '',
}

LinkButton.propTypes = {
  imageSrc: PropTypes.string,
}

LinkButton.defaultProps = {
  imageSrc: '',
}

export { ImageButton, SearchBar, InfoFooterContainer }
