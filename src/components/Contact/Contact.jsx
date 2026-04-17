import classes from './Contact.module.css'

const Contacto = () => {
  return (
    <div className="container mt-5 text-center">
    <h1 className={classes.h1}>
        Contacto
    </h1>
      <h3 className={classes.h3}>
        Si querés comunicarte con nosotros, podés hacerlo a través de:
      </h3>
        <h4 className={classes.h4}>Whatsapp (sólo mensajes): 1141919365 (Juan)</h4>
        <h4 className={classes.h4}>Correo electrónico: info@tecnozono.com.ar</h4>
        <h4>
            <a href="https://www.instagram.com/tecnozono.arg/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <h4 className={classes.h4}>Instagram: tecnozono.arg</h4>
            </a>
        </h4>
        <div className={classes.mapWrap}>
          <iframe
            title="Ubicación de nuestra oficina."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8701189171716!2d-58.39021692344985!3d-34.60744565769655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac49187610b%3A0xf1ecc4760baa90ee!2sParan%C3%A1%20123%2C%20C1037%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1769972911242!5m2!1sen!2sar"
            width="100%"
            height="320"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
    </div>
  )
}

export default Contacto