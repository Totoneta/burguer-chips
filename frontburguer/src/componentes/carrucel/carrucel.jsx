import { useState } from "react";
import "./carrucel.css"

function Carrucel() {

    const imgs = [
        {
            id: 50,
            path: '/carrucel1.jpg',
            nombre: 'Burguer',
        },
        {
            id: 51,
            path: '/carrucel2.jpg',
            nombre: 'Burguer',
        },
        {
            id: 52,
            path: '/carrucel3.jpg',
            nombre: 'Burguer',
        },
        {
            id: 53,
            path: '/carrucel4.jpg',
            nombre: 'Burguer',
        },
    ]

    const [index, setIndex] = useState(0); 

    return (
        <section className="index-first">
                <div className="botones">
                    <img className="btn-left" src="/arrow-left.svg" alt="Flecha Izquierda" />
                    <img className="btn-right" src="/arrow-right.svg" alt="Flecha Izquierda" />
                </div>
                
            <div className="carrucel-container" >
                <div className="carrucel">
                    {
                        imgs.map((img) => {
                            return(
                                <img key={img.id} src={img.path} alt={img.nombre} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Carrucel;