import Navbar from './componentes/Navbar/navbar.js';
import Index from './pages/index-carr-indsec/index-carr-indsec.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './pages/productos-page/productos.js';
import Footer from './componentes/footer/footer.js';
import { CarritoContext } from './contextos/carrito-context.js';


export default function App() {

    return (

        <BrowserRouter>
            <CarritoContext>

                <Navbar />
                <Routes>

                    <Route path="/" element={<Index />} />
                    <Route path="/Productos" element={<Productos />} />
                </Routes>
                <Footer />

            </CarritoContext>
        </BrowserRouter>

    )
}