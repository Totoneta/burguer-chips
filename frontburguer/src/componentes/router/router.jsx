/* Components */
import Navbar from './componentes/Navbar/navbar.js';
import Footer from './componentes/footer/footer.js';
/* Router Dom */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* Pages */
import Index from '../../pages/index-page.jsx';
import Productos from '../../pages/productos-page.jsx';

export default function App() {

    return (

        <BrowserRouter>

                <Navbar />
                <Routes>

                    <Route path="/" element={<Index />} />
                    <Route path="/Productos" element={<Productos />} />
                </Routes>
                <Footer />
                
        </BrowserRouter>
    )
}