import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>
                    Celulares
                </button>
                <button>
                    Tablets
                </button>
                <button>
                    NoteBook
                </button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;