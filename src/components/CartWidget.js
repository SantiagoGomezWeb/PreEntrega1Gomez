import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget(){
    return(
        <FontAwesomeIcon icon={faCartShopping} style={{color:"#ECE8E8"}} size="2x" className="p-1"/>
    )
}

export default CartWidget;