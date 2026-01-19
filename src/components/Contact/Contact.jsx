import classes from './Contact.module.css'

const Contacto = () => {
  return (
    <div className="container mt-5 text-center">
    <h1 className={classes.h1}>
        Contacto
    </h1>
    <img className={classes.img} src={"/img/logo_4.png"} />
      <h4 className={classes.h4}>
        Si querés comunicarte con nosotros, podés hacerlo a través de:
      </h4>
        <h4>
            <a href="https://wa.me/1141919365" target="_blank" rel="noopener noreferrer" className={classes.link}>
                Whatsapp (sólo mensajes): 1141919365 (Juan)
            </a>
        </h4>
        <h4>Email: juanmichero2002@gmail.com</h4>
        <h4>
            <a href="https://www.instagram.com/tecnozono.arg/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                Instagram: tecnozono.arg
            </a>
        </h4>

    </div>
  )
}

export default Contacto