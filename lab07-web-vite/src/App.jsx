import React from 'react'
import './App.css'
import { Header, Body } from './Fragments'
import { Footer } from './Components'
// import Body from './Components'

// const { useState } = React

function App() {
  // const [cards, set_Cards] = useState([])
  // let mssg = 'hello'
  return (
    <>
      <Header />
      <Body />
      {/* <image src="https://github.com/JDgomez2002/lab07_web/blob/main/img/Footer.png?raw=true" /> */}
      <Footer />
    </>
  )
}

export default App
