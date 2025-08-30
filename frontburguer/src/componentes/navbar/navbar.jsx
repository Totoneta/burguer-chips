import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ItemsCart } from "../Items-carrito/items-carrito";
import { useSelector } from "react-redux";

export default function Navbar() {

    const [openmenu, setOpenMenu] = useState(false);

    const { cantidadProductos } = useSelector(state => state.carrito)

    //Menu DropDown
    const ShowHideMenu = () => {
        setOpenMenu(!openmenu)
    }


    return (
        <nav className="container-navbar">
            <Link to="/"><img src="LOGO-B.png" alt='Logo' /></Link>
            <ul className="nav-list">

                <li className="nav-item"><Link to="/">INICIO</Link></li>

                <li className="nav-item"><Link to="/Productos">PRODUCTOS</Link></li>

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

