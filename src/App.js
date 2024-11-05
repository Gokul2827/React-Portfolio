import React from 'react'
import './App.css'
import Content from './components/content/Content'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Projects from './pages/project/Projects'

function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      {/* <Projects></Projects> */}
    </div>
  )
}

export default App