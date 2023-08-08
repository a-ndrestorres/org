import React from 'react';
import './formProg.css'

import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Coloborador';

const Equipos = (props) => {

    const {colorPrimario, colorSecundario , titulo , id } = props.equipo
    const { colaboradores , eliminarColaborador, actualizarColor , like} = props
   
    const colorFondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    const colorborder = {
        borderColor: colorSecundario
    }
    
    
    return ( colaboradores.length > 0 &&
        <section className='Lista-equipo' style={colorFondo}>
            <input  
            className='input-color'
            type='color' 
            value={ colorPrimario}
            onChange={(event)=>{
                actualizarColor(event.target.value, id)
            }}>               
            </input>

            <h1 style={colorborder}>{titulo}</h1>

            <div className='colaboradores' >
               {
                colaboradores.map((colaborador, i)=>
                <Colaborador 
                key={i} 
                datos={colaborador} 
                colorPrimario={colorPrimario} 
                eliminarColaborador={eliminarColaborador}
                like={like}                />)
               }
            </div>
        </section>
    );
}

export default Equipos;
