import './boton.css'
import React from 'react';

const Boton = (props) => {
    return (
        <div className='boton'>
            <button>{props.children}</button>
        </div>
    );
}

export default Boton;
