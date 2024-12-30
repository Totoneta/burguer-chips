import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    cantidadProductos: 0,
    productosCarrito: [],
    totalCompra: 0
  },
  reducers: {
    agregarProducto: (state, action) => {
      const producto = action.payload;
      state.productosCarrito.push(producto);
      state.cantidadProductos += 1;
      state.totalCompra += producto.precio;
    },
    eliminarProducto: (state, action) => {
      const idProducto = action.payload;
      const productoIndex = state.productosCarrito.findIndex(p => p.id === idProducto);
      if (productoIndex !== -1) {
        const productoEliminado = state.productosCarrito.splice(productoIndex, 1)[0];
        state.cantidadProductos -= 1;
        state.totalCompra -= productoEliminado.precio;
      }
    },
    vaciarCarrito: (state) => {
      state.productosCarrito = [];
      state.cantidadProductos = 0;
      state.totalCompra = 0;
    }
  }
});

export const { agregarProducto, eliminarProducto, vaciarCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;