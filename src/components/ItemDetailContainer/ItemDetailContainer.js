import { useEffect } from "react"
import { useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
 

    const { itemId } = useParams();

    useEffect(() =>{
        setLoading(true)
        const docRef = doc(db, 'Products', itemId)
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [itemId])
    return (
        <div>
            {!loading? (product ? <ItemDetail {...product}/> : <h2>No existe el producto</h2>)
            : <h2>Cargando....</h2>}
        </div>
    )
}

export default ItemDetailContainer;