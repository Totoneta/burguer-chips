import './combosmaspedidos.css'
import { combos } from '../../data-json/combos.jsx'
import { Link } from 'react-router-dom'

/* Drag-Drop-Comonents Hello Pangea Dnd */
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useState } from 'react'

/* 3 Combos Card */
export default function CombosMasPedidos() {
    const [combosstate, setCombosState] = useState(combos)

    const Deslizar = (e) => {
        if (!e.destination) return;
        const nuevoItem = Array.from(combosstate)
        const [reordenamiento] = nuevoItem.splice(e.source.index, 1);
        nuevoItem.splice(e.destination.index, 0, reordenamiento)

        setCombosState(nuevoItem)
    }

    return (
        <section className="combosmaspedidos">
            <DragDropContext onDragEnd={Deslizar}>
                <Droppable droppableId='cards' direction='horizontal'>
                    {(provided) => (
                        <ul
                            className='maspedidoscontainer'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {combosstate
                                .filter(i => i.id <= 4)
                                .map((i, index) => (
                                    <Draggable key={i.id} draggableId={i.id.toString()} index={index}>
                                        {(provided) => (
                                            <li
                                                className="maspedidoscard"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <img src={i.path} alt={i.titulo} />
                                                <div className="maspedidoscardtext">
                                                    <h3>{i.titulo}</h3>
                                                    <div className="maspedidoscardtextdescription">
                                                        <span>${i.precio}</span>
                                                        <p>{i.descripcion}</p>
                                                    </div>
                                                </div>
                                                <i className='bxr  bx-menu-close'  ></i> 
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <Link to='/productos'>TODOS LOS COMBOS <i className='bxr  bx-arrow-big-right-line'  ></i> </Link>
        </section>
    )
}
