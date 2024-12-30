import React, { useContext, useEffect, useState, useCallback } from 'react';

const ContextoCarrito = React.createContext();
const ContextoCantidad = React.createContext();
const ContextoTotal = React.createContext();
const ContextoAgregarAlCarrito = React.createContext();
const ContextoEliminar = React.createContext();
const ContextoVaciarCarrito = React.createContext();

export function useCarritoContext() {
    return useContext(ContextoCarrito);
}
export function useCantidadContext() {
    return useContext(ContextoCantidad);
}
export function useTotalContext() {
    return useContext(ContextoTotal);
}
export function useEliminarContext() {
    return useContext(ContextoEliminar);
}
export function useVaciarCarritoContext() {
    return useContext(ContextoVaciarCarrito);
}
export function useAgregarAlCarrito() {
    return useContext(ContextoAgregarAlCarrito);
}

export function CarritoContext({ children }) {
    const [carrito, setCarrito] = useState(() => JSON.parse(localStorage.getItem('carrito')) || []);
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(() => {
        const carritoGuardado = localStorage.getItem('cantidad');
        const parsedCantidad = parseInt(carritoGuardado, 10);
        return isNaN(parsedCantidad) ? 0 : parsedCantidad;
    });

    const Eliminar = useCallback((index) => {
        const updatedCarrito = [...carrito];
        updatedCarrito.splice(index, 1);
        setCarrito(updatedCarrito);
        setCantidad(cantidad - 1);
    }, [carrito, cantidad]);

    const VaciarCarrito = useCallback(() => {
        setCarrito([]);
        setCantidad(0);
        setTotal(0);
    }, []);

    const AgregarAlCarrito = useCallback((elemento) => {
        setCarrito([...carrito, elemento]);
        setCantidad(cantidad + 1);
        setTotal(total + elemento.precio);
    }, [carrito, cantidad, total]);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    useEffect(() => {
        setTotal(carrito.reduce((acc, item) => acc + Number(item.precio), 0));
    }, [carrito]);

    useEffect(() => {
        localStorage.setItem('cantidad', JSON.stringify(cantidad));
    }, [cantidad]);

    return (
        <ContextoCarrito.Provider value={carrito}>
            <ContextoCantidad.Provider value={cantidad}>
                <ContextoTotal.Provider value={total}>
                    <ContextoEliminar.Provider value={Eliminar}>
                        <ContextoVaciarCarrito.Provider value={VaciarCarrito}>
                            <ContextoAgregarAlCarrito.Provider value={AgregarAlCarrito}>
                                {children}
                            </ContextoAgregarAlCarrito.Provider>
                        </ContextoVaciarCarrito.Provider>
                    </ContextoEliminar.Provider>
                </ContextoTotal.Provider>
            </ContextoCantidad.Provider>
        </ContextoCarrito.Provider>
    );
}
