import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className={classes.card}>
            <h1 className={classes.name}>{name}</h1>
            <Link className={classes.imageLink} to={`/product/${id}`}>
                <div className={classes.imageWrap}>
                    <img src={img} className={classes.img} alt={name}/>
                </div>
            </Link>
            <div className={classes.div}>
                <h3 className={classes.price}>{price}</h3>
            </div>
        </div>
    )
}

export default Item