import React from 'react'
import './Components.css'
import PropTypes from 'prop-types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

function ImageButton({ imageSrc }) {
  return (
    <button type="submit" className="button-aside">
      <img className="button-image" src={imageSrc} alt="buttonpng" border="0" />
    </button>
  )
}

function LinkButton({ imageSrc }) {
  return (
    <a type="submit" className="logo-link" href="https://duckduckgo.com/about">
      <img className="logo-image" src={imageSrc} alt="logoPng" border="0" />
    </a>
  )
}

function SearchInput() {
  const magnifyingImgSrc = 'https://github.com/JDgomez2002/lab07_web/blob/main/img/image-4.png?raw=true'

  return (
    <div className="searchBar-div-container">
      <input
        type="search"
        className="input-aside"
        placeholder="Busca en la red sin que te rastreen"
      />
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

function Bullet({ text }) {
  return (
    <div
      style={{
        display: 'flex',
        placeItems: 'center',
        fontSize: 'small',
        width: 'fit-content',
        margin: '8px 20px',
        fontWeight: '500',
      }}
    >
      <CheckCircleIcon
        fontSize="Small"
        style={{
          color: '#678fff',
          backgroundColor: 'white',
          borderRadius: '50px',
          borderWidth: '0px',
          borderColor: 'inherit',
        }}
      />
      <div style={{ margin: '0px 0px 0px 2px' }}>{text}</div>
    </div>
  )
}

function Card({
  title,
  text,
  link,
  image,
}) {
  return (
    <div className="card-container">
      <img alt={image} src={image} style={{ height: '100px', width: 'auto' }} />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link} style={{ color: '#678fff', textDecoration: 'none' }}>{link}</a>
    </div>
  )
}

function MainText() {
  return (
    <div className="main-text-container">
      <h1>¿Cansado que te rastreen? Podemos ayudarte.</h1>
      <p>
        Consigue protección continua y gratuita para tu privacidad en el
        navegador con una descarga:
      </p>
      <div style={{ width: '100%', display: 'flex', placeContent: 'center' }}>
        <Bullet text="Búsqueda Privada" />
        <Bullet text="Bloqueo De Rastreadores" />
        <Bullet text="Encriptación De Sitios" />
      </div>
      <button type="button">Añadir DuckDuckGo a Chrome</button>
      <h5>
        ¡Con la confianza de decenas de millones de personas en todo el mundo!
      </h5>
      <h4>Protección de la Privacidad para Cualquier Dispositivo</h4>
      <div style={{
        margin: '50px 0px 0px 0px',
        width: '100%',
        display: 'flex',
        placeContent: 'center',
      }}
      >
        <Card
          title="Privacidad para Chrome"
          text="Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, b
          loqueador de rastreadores y mejora de encriptación todo en una"
          link="extensión de Chrome"
          image="https://github.com/JDgomez2002/lab07_web/blob/main/img/Bird.png?raw=true"
        />
        <Card
          title="Motor de Búsqueda Privada"
          text="Busca de forma privada con nuestra app o extensión, añade búsqueda web p
          rivada a tu navegador preferido o busca en"
          link="duckduckgo.com."
          image="https://github.com/JDgomez2002/lab07_web/blob/main/img/scope.png?raw=true"
        />
        <Card
          title="Navegador Privado"
          text="Nuestro navegador privado para móviles viene equipado con nuestro motor d
          e búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para"
          link="iOS y Android."
          image="https://github.com/JDgomez2002/lab07_web/blob/main/img/phone.png?raw=true"
        />
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <h2 style={{ textAlign: 'center' }}>No guardamos tu información personal. Y nunca lo haremos.</h2>
        <p style={{ width: '500px', fontSize: 'large', margin: '25px 0px 0px 0px' }}>
          Nuestra política de privacidad es simple: No colectamos o compartimos ninguna información personal tuya.
        </p>
        <button
          style={{
            backgroundColor: '#282828b9',
            fontSize: 'medium',
            fontWeight: '500',
            margin: '30px 0px 0px 0px',
          }}
          type="button"
        >
          Instalar DuckDuckGo
        </button>
      </div>
    </div>
  )
}

function SearchBar({ imageSrc }) {
  return (
    <>
      <LinkButton imageSrc={imageSrc} />
      <SearchInput />
      <MainText />
    </>
  )
}

function Footer() {
  return (
    <img
      alt="Footer"
      style={{
        backgroundColor: '#58B792',
        width: '100%',
        height: 'auto',
        margin: '100px 0px 0px 0px',
      }}
      src="https://github.com/JDgomez2002/lab07_web/blob/main/img/Footer.png?raw=true"
    />
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

Bullet.propTypes = {
  text: PropTypes.string,
}

Bullet.defaultProps = {
  text: '',
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
}

Card.defaultProps = {
  title: '',
  text: '',
  link: '',
  image: '',
}

export { ImageButton, SearchBar, Footer }
