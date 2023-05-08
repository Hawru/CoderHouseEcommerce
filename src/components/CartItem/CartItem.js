import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
const CartItem = ({id, name, quantity, price}) =>{
    const {removeItem} = useContext(CartContext)
    return (
        <div>
            <p> { name } </p>
            <p> Cantidad { quantity } </p>
            <p> Precio x Unidad ${ price } </p>
            <p> Subtotal: { price * quantity } </p>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}

export default CartItem