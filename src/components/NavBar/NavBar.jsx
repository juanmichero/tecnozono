// src/components/NavBar/NavBar.jsx
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = ({img}) => {
  return (
    <nav className={classes.nav}>
      <div>
        <Link to="/" className={classes.title}>
              <img src={"/img/logo_3.png"} className={classes.img}/>
        </Link>
      </div>

      <section className="d-flex align-items-center flex-wrap">
        <Link to="/" className={classes.button}>
          Productos
        </Link>
        <Link to="/service" className={classes.button}>
          Servicio Técnico
        </Link>
        <Link to="/contact" className={classes.button}>
          Contacto
        </Link>
      </section>
    </nav>
  )
}

export default NavBar
