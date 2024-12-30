import burguers from "../../data-json/burgers.json"
import React from "react";
import  {agregarProducto}  from './../../redux/carritoslice'
import { useDispatch } from "react-redux";


function Burguers() {
  
  const dispatch = useDispatch();
  
  return (
    <div className='productos-cont'>

      <h2 className='burguers-t'>BURGUERS</h2>

      <div className="burguers" >
        {
          burguers &&
          burguers.map((elemento) => (
            <div key={elemento.id} className="tarjeta" id={elemento.id}>
              <img src={elemento.img} alt={elemento.titulo} />
              <div className="tarjeta-cont">
                <div className="texto-tarjeta">
                  <h3>{elemento.titulo}</h3>
                  <span>{elemento.precio}</span>
                  <p>{elemento.descripcion}</p>
                </div>
                <div className="button-cont">
                  <button
                    onClick={() => dispatch(agregarProducto(elemento))}>
                    <img
                      id={elemento.id}
                      src="/add-carrito.svg"
                      alt="Carrito"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Burguers;
