import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Componentes */
import Navbar from './../componentes/navbar/navbar'
import Footer from './../componentes/footer/footer';

/* Páginas */
import IndexPage from '../pages/index-page.jsx';
import ProductosPage from '../pages/productos-page.jsx';


export default function Router() {

    return (

        <BrowserRouter>

                <Navbar />
                <Routes>

                    <Route path="/" element={<IndexPage />} />
                    <Route path="/Productos" element={<ProductosPage />} />
                </Routes>
                <Footer />

        </BrowserRouter>

    )
}