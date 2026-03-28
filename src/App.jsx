import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1 className="main-title">Mi Portafolio</h1>
      </header>
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  )
}

export default App; // <--- TE FALTA ESTA LÍNEA