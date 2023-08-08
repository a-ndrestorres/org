import React, { useState } from 'react';
import './miorg.css'
const Miorg = (props) => {

    const [Mostrar, actualizarMostrar] = useState(true);
    
  
    return (
        <section className='orgSection'>
            <h3 className='titulo'> Mi organizacion</h3>
            <img src='/img/Botonadd.png' alt='add' onClick={props.cambiarMostrar}></img>
        </section>
    );
}

export default Miorg;
