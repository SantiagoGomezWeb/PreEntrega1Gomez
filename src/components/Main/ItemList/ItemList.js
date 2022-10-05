import React from "react";
import Item from "../Item/Item";

const itemList = ( {products} ) => {
    //Listar

    //map transformando los productos en componentes items
    return (
        <div className="item-list">
            { products.map(prod => <Item key={prod.id} {...prod}/>)};
            {/* {{ products.map(prod => <Item key={prod.id} img={prod.img} nombre={prod.nombre} categoria={prod.categoria} precio={prod.precio}/>)} } */}
        </div>
    )
}


export default itemList;