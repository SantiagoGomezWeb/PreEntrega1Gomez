import { useState,  useEffect} from 'react';
import { getProducts } from '../../../data/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainser = ({greeting}) => {
    //estado
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    //efecto
    useEffect(()=> {
        getProducts().then(respuesta => {
            setProducts(respuesta)
        }).finally(()=>{
            setLoading(false)
        })
    },[])
    
    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {/* <h2>{greeting}</h2> */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainser;