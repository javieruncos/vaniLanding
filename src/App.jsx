import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/Home/Inicio.jsx'
import Menu from './components/common/Menu.jsx'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/common/Footer.jsx'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <div className='App'>
        <Menu></Menu>
        <Inicio></Inicio>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
