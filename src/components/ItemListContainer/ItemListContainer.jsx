import ItemList from '../ItemList/ItemList'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products as allProducts } from '../../data/products'

const ItemListContainer = ({ greeting }) => {
    const { category } = useParams()

    useEffect(() => {
        if(category) document.title = category

        return () => {
            document.title = 'TecnOzono'
        }
    }, [category])

    const filteredProducts = category
    ? allProducts.filter(prod => prod.category === category)
    : allProducts

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1 className='text-center m-2'>{greeting + (category ?? '')}</h1>
            <ItemList products={filteredProducts} />
        </div>
    )
}

export default ItemListContainer