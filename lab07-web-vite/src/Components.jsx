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

function NavBar() {
  return (
    <div>This is the navbar</div>
  )
}

function InformationFooterContainer() {
  return (
    <div>This is the footer information container...</div>
  )
}

ImageButton.propTypes = {
  imageSrc: PropTypes.string,
}

ImageButton.defaultProps = {
  imageSrc: '',
}

export { ImageButton, NavBar, InformationFooterContainer }
