import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products'

const ItemDetailContainer = () => {
    const { id } = useParams()

    const product = products.find(p => p.id === id)

    if(!product) {
        return <h1 className='d-flex justify-content-center mt-5'>Producto no encontrado</h1>
    }

    const images = product.images?.length ? product.images : [product.img];

    return (
        <div className='d-flex justify-content-center'>
            <ItemDetail {...product} images={images}/>
        </div>
    )
}

export default ItemDetailContainer