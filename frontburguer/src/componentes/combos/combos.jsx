import { useDispatch } from "react-redux";
import combos from "../../data-json/combos.json";
import  {agregarProducto}  from './../../redux/carritoslice'
import React from "react";

function Combos() {

  const dispatch = useDispatch();

  const HandleCombos = (elemento) => {
    dispatch(agregarProducto(elemento))
  }


  return (
    <div className='productos-cont'>
      <h2 className='combos-t'>COMBOS</h2>
      <div className='combos'>
        {combos.map((elemento) => (
          <div key={elemento.id} className="tarjeta" id={elemento.id}>
            <img src={elemento.img} alt={elemento.titulo} />
            <div className="tarjeta-cont">
              <div className="texto-tarjeta">
                <h3>{elemento.titulo}</h3>
                <span>{`$${elemento.precio}`}</span>
                <p>{elemento.descripcion}</p>
              </div>
              <div className="button-cont">
                <button
                  onClick={() => {HandleCombos(elemento)}}
                  aria-label={`Agregar ${elemento.titulo} al carrito`}>
                  <img
                    src="/add-carrito.svg"
                    alt="Carrito"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Combos;
