import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ItemsCart } from "../Items-carrito/items-carrito";
import { useSelector } from "react-redux";

export default function Navbar() {

    const [openmenu, setOpenMenu] = useState(false);

    const { cantidadProductos } = useSelector(state => state.carrito)

    const ShowHideMenu = () => {
        setOpenMenu(!openmenu)
    }


    return (
        <nav className="container-navbar">
            <ul className="nav-list">

                <Link to="/"><img src="LOGO-B.png" alt='Logo' /></Link>

                <li className="nav-item"><Link to="/">Inicio</Link></li>

                <li className="nav-item"><Link to="/Productos">Productos</Link></li>

                <li className="nav-item-carrito" >

                    <div className="cart-navbar-menu" onClick={ShowHideMenu} >
                        <img className="carrito-img-navbar" src="/carrito.svg" alt="Carrito" />
                        <span> {cantidadProductos} </span>
                    </div>

                    <ItemsCart openmenu={openmenu} />

                </li>
            </ul>
        </nav>
    );
};

