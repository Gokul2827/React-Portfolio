import React from 'react'
import './App.css'
import Content from './components/content/Content'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App