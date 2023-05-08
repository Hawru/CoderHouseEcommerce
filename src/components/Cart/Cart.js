import { useContext} from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    return (
        totalQuantity !== 0 ? (
            <div>
                {cart.map(p => <CartItem key={p.id} {...p}></CartItem>)}
                <h3>
                    Total: ${total}
                </h3>
                <button onClick={() => clearCart()}> Limpiar</button>
                <Link to='/checkout'>Checkout</Link>
            </div>
        ) : (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    )
    
}

export default Cart;
