import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/cart.png'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return(
        <Link to='/cart' style={{display: totalQuantity === 0 ? 'none' : 'block'}}>
            <img src={cart} alt="cart=widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;
