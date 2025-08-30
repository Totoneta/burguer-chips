import { useDispatch, useSelector } from 'react-redux';
import { eliminarProducto, vaciarCarrito } from './../../redux/carritoslice'
import './items-carrito.css'

export function ItemsCart({ openmenu }) {

  const dispatch = useDispatch()

  const { cantidadProductos, productosCarrito, totalCompra } = useSelector(state => state.carrito);

  return (
    <div className="cart-container">
      {openmenu ? (
        <ul className="cart">
          {cantidadProductos > 0 ? (
            productosCarrito.map((item) => (
              <li key={item.id} className="item-cart">
                <img src={item.path} alt={item.titulo} />
                <div className="item-cart-text">
                  <h3>{item.titulo}</h3>
                  <span>${item.precio}</span>
                </div>
                <div className="item-cart-btns">
                  <button onClick={() => dispatch(eliminarProducto(item.id))}>Eliminar</button>
                  <button>Editar</button>
                </div>
              </li>
            ))
          ) : (
            <li className="cart-vacio">
              <h1>EMPTY CART</h1>
            </li>
          )}
          <div className="containeritemscartbtns">
            <button className='vaciar-cart' onClick={() => dispatch(vaciarCarrito())} >Vaciar Carrito</button>
            <span>${totalCompra}</span>
            <button className='pagar-cart'>Comprar</button>
          </div>
        </ul>

      ) : (
        <></>
      )}
    </div>
  )
};

