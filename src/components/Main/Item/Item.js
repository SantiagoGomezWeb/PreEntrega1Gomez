import React from "react";

const Item = ({ img, nombre, categoria, precio }) => {
    return (
        <article className="card">
            <img src={img} alt={nombre} style={{ width: 300 }} />
            <div className="card-info">
                <h2 className="card-titulo">{nombre} </h2>
                <h4 className="card-precio">${precio}</h4>
                <h5>#{categoria}</h5>
            </div>
        </article>            
    )
}

export default Item;