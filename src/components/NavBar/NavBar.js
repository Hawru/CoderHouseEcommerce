import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <NavLink to={`/category/celular`}>
                    Celulares
                </NavLink >
                <NavLink to={`/category/tablet`}>
                    Tablets
                </NavLink>
                <NavLink to={`/category/notebook`}>
                    Notebooks
                </NavLink>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar;