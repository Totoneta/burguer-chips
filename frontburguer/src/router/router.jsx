import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Contexto */
import { CarritoContext } from './../contextos/carrito-context';

/* Componentes */
import Navbar from './../componentes/navbar/navbar'
import Footer from './../componentes/footer/footer';

/* Páginas */
import IndexPage from '../pages/index-page/index-page';
import ProductosPage from '../pages/productos-page/productos';


export default function Router() {

    return (

        <BrowserRouter>
            <CarritoContext>

                <Navbar />
                <Routes>

                    <Route path="/" element={<IndexPage />} />
                    <Route path="/Productos" element={<ProductosPage />} />
                </Routes>
                <Footer />

            </CarritoContext>
        </BrowserRouter>

    )
}