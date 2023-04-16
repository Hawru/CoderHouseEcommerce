import { useEffect } from "react"
import { useState } from "react"
import { getProductById } from '../../asyncMock'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() =>{
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error =>{
                console.error(error);
            })
    }, [itemId])
    return (
        <div>
            {product ? <ItemDetail {...product}/> : <h2>No existe el producto</h2>}
        </div>
    )
}

export default ItemDetailContainer;