import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from './carritoslice';

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
  }
});