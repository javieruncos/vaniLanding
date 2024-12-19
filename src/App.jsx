import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Inicio from './components/Home/Inicio.jsx'
import Menu from './components/common/Menu.jsx'
import MenuNav from './components/common/MenuNav.jsx'
function App() {

  return (
    <>
      <div className='App'>
        <Menu></Menu>
        <Inicio></Inicio>
      </div>
    </>
  )
}

export default App
