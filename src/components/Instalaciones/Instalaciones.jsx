import classes from './Instalaciones.module.css'

const Instalaciones = () => {
  return (
    <div className="container mt-5 text-center">
    <h1 className={classes.h1}>
        Instalaciones
    </h1>
      <h3 className={classes.h3}>
        Realizamos armado e instalación de ductos generadores de ozono personalizados para salas de cultivo. ¡Contactanos!
      </h3>
    <img className={classes.img} src={"/img/instal_1.jpeg"} />
    <img className={classes.img} src={"/img/instal_2.jpeg"} />
    <img className={classes.img} src={"/img/instal_3.jpeg"} />
    <img className={classes.img} src={"/img/instal_4.jpeg"} />
    <video width="70%" controls>
      <source src={"/vid/instal_vid_1.mp4"}/>
    </video>
    <img className={classes.img} src={"/img/instal_5.jpeg"} />
    <img className={classes.img} src={"/img/instal_6.jpeg"} />
    <img className={classes.img2} src={"/img/instal_7.jpeg"} />
    <div>
      <video width="50%" controls>
      <source src={"/vid/instal_vid_2.mp4"}/>
    </video>
    </div>
    <img className={classes.img2} src={"/img/instal_8.jpg"} />
    </div>
  )
}

export default Instalaciones