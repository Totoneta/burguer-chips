import './combosmaspedidos.css'
import { combos } from '../../data-json/combos.jsx'
import { Link } from 'react-router-dom'

/* 3 Combos Card */
export default function CombosMasPedidos() {

    return (
        <section className="combosmaspedidos">
            <ul className='maspedidoscontainer'>
                {
                    combos.map((i) => {
                        if (i.id <= 4) {

                            return (
                                <li key={i.id} className="maspedidoscard">
                                    <img src={i.path} alt={i.titulo} />
                                    <div className="maspedidoscardtext">
                                        <h3>{i.titulo}</h3>
                                        <div className="maspedidoscardtextdescription">
                                            <span>${i.precio}</span>
                                            <p>{i.descripcion}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        else {
                            return <></>
                        }
                    })
                }
            </ul>
            <Link to='/productos'>TODOS LOS COMBOS >>></Link>
        </section>
    )
}