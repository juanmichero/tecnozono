import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Contact from './components/Contact/Contact'
import classes from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import Instalaciones from './components/Instalaciones/Instalaciones'

function App() {

  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Ozonizadores, Fuentes UPS, Luces de Emergencia y más." />} />
            <Route path='/category/:category' element={<ItemListContainer greeting="" />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/instalaciones" element={<Instalaciones />} />
            <Route path='*' element={<h1 className={classes.error}>ERROR 404</h1>}/>
          </Routes>
          <WhatsAppButton />
      </BrowserRouter>
    </>
  )
}

export default App