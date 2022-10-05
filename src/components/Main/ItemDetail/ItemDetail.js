import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div className='container'>
                <h2 className="card-precio">{item.descripcion}</h2>
                <p className="container-detail parrafo-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;
