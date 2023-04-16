const ItemDetail = ({id, name, categpry, description, img, price, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Categoria: {categpry}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <button>
                    Ver detalle
                </button>
            </footer>
        </article>
    )
}

export default ItemDetail;