import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(()=>{

        const asynFunc = categoryId ? getProductByCategory : getProducts;

        asynFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemList products={products}/> : <h2>No hay productos</h2>}
            
        </div>
    )
}

export default ItemListContainer;