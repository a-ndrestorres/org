import ListaOpciones from '../ListaEquipo';
import Boton from '../boton/boton';
import Campo from '../campo/campo';
import './formStyle.css'

import React , { useState } from 'react'

const Form = (props) => {
    const [id, setActulizarid] = useState('');
    const [nombre, setActulizarNombre] = useState('');
    const [puesto, setActulizarpuesto] = useState('');
    const [foto, setActulizarfoto] = useState('');
    const [equipo, setActulizarequipo] = useState('');

    const [titulo, setActulizarTitulo] = useState('');
    const [color, setActulizarColor] = useState('');

    const { registrarColoborador, crearEquipo } = props
    const manejarEnvio = (evento) => {
        evento.preventDefault()
        const datosAenviar = {
            id,
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColoborador(datosAenviar);
    }
    
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color});
    }
    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo Titulo='Nombre' placeholder="Ingresar Nombre" required valor={nombre} actualizarvalor={setActulizarNombre} ></Campo>   
                <Campo Titulo='Puesto' placeholder="Ingresar Puesto" required valor={puesto} actualizarvalor={setActulizarpuesto}></Campo>  
                <Campo Titulo='Foto' placeholder="Ingresar enlace de foto" required valor={foto} actualizarvalor={setActulizarfoto}></Campo>   
                <ListaOpciones valor={equipo} actualizarvalor={setActulizarequipo} required equipos={props.equipos}></ListaOpciones>
                <Boton> Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo Titulo='titulo' placeholder="Ingresar titulo" required valor={titulo} actualizarvalor={setActulizarTitulo} ></Campo>   
                <Campo type='color' Titulo='color' placeholder="Ingresar color en hex" required valor={color} actualizarvalor={setActulizarColor}></Campo>  
                <Boton> Registrar equipo</Boton>
            </form>
        </section>
    );
}

export default Form;
