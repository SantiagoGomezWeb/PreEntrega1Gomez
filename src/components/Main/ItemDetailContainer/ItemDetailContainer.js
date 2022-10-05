import React, { useState,  useEffect} from 'react';
import { products } from '../../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    //estado
    const [item, setItem] = useState({})

    //efecto
    useEffect(()=> {
        const traerProducto = () => {
            return new Promise((res,rej) => {
            const producto = products.find((prod)=> prod.id ===2)
            setTimeout(() => {
               res(producto) 
            }, 2000);
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            });
    },[]);
    
    return (
        <div className="item-list-container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;