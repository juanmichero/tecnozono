import classes from './ItemDetail.module.css'
import { EmblaCarousel } from '../Embla/EmblaCarousel'


const ItemDetail = ({ name, price, description, images }) => {
    return (
        <div className={classes.card}>
                <h1 className={classes.h1}>{name}</h1>
                <EmblaCarousel slides={images} altBase={name}></EmblaCarousel>
                <h4 className={classes.swipe}>Deslizar para ver más imágenes</h4>
                <h3 className={classes.h3}>{price}</h3>
                <h4 className={classes.h4}>
                    {description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h4>
            </div>
    )
}

export default ItemDetail