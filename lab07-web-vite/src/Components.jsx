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
  return (
    <div className="SearchBar-div-container">
      <input className="input-aside" />
      <button type="submit" className="button-search-aside">Search</button>
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
    <div>This is the footer container...</div>
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
