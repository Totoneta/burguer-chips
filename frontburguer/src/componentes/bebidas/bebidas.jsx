import  {agregarProducto}  from './../../redux/carritoslice'
import bebidas from "../../data-json/bebidas.json";
import { useDispatch } from 'react-redux';

function Bebidas() {
  
  const dispatch = useDispatch();

  return (
    <div className='productos-cont'>

      <h2 className='bebidas-t'>BEBIDAS</h2>

      <div className='bebidas'>
        {
          bebidas &&
          bebidas.map((elemento) => (
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



export default Bebidas;