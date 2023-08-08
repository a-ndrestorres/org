import './ListaOpciones.css'
import React from 'react';

const ListaOpciones = (props) => {

    const actualizarValor = (e)=>{
        props.actualizarvalor(e.target.value)
    }

    return (
        <div className='lista-opciones'>
            <label>Equipo</label>
            <select required={props.required} value={props.valor} onChange={actualizarValor}>
                <option value={''} defaultValue={''} hidden> Elegir un equipo</option>
                { 
                props.equipos.map((Equipo , i ) => (<option key={i} value={Equipo} >{ Equipo }</option>))
                };       
            </select>
        </div>
    );
}

export default ListaOpciones;
