import { useState } from "react";
import "./carrucel.css"

function Carrucel() {

    const [index, setIndex] = useState(0); 



    return (
        <section className="index-first">
                <div className="botones">
                    <img className="btn-left" src="/arrow-left.svg" alt="Flecha Izquierda" />
                    <img className="btn-right" src="/arrow-right.svg" alt="Flecha Izquierda" />
                </div>
                
            <div className="carrucel-container" >
                <div className="carrucel">
                    <img src="/carrucel1.jpg" alt="Hamburguesa" />
                    <img src="/carrucel4.jpg" alt="Hamburguesa" />
                    <img src="/carrucel2.jpg" alt="Hamburguesa" />
                </div>
            </div>
        </section>
    )
}

export default Carrucel;