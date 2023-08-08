import './App.css';
import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import Miorg from './component/BotonMiOrg';
import Form from './component/Form/form'
import Header from './component/Header/Header';
import Footer from './component/footer/Footer';
import Equipos from './component/equipo/formProg';


function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([
          {
          id: uuid(),
          nombre: "Maria",
          puesto: "instructora ",
          foto : "https://th.bing.com/th?q=Fotos+Para+Perfil&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-XL&cc=CO&setlang=es&adlt=moderate&t=1&mw=247",
          equipo : "Programacion",
          fav:true
          },
          {
          id: uuid(),
          nombre: "porqui",
          puesto: "instructora ",
          foto : "https://th.bing.com/th/id/OIP.JsEChDUUkV-BLiSyuGHzNwHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
          equipo : "Front end",
          fav:true
        },
          {
          id: uuid(),
          nombre: "juana",
          puesto: "instructora ",
          foto : "https://th.bing.com/th/id/R.b47c3d47f648bdd67b3f49abb952b3fb?rik=lxi8PPnMC5stDw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-11.jpg&ehk=t21RezqHRjWPdstY%2bX%2fjJ%2fI2GsXu3x3VHMHeJ5ZD0oQ%3d&risl=&pid=ImgRaw&r=0",
          equipo : "Data Science",
          fav:true
        },
          {
           id: uuid(),
          nombre: "juana",
          puesto: "instructora ",
          foto : "https://th.bing.com/th/id/R.b47c3d47f648bdd67b3f49abb952b3fb?rik=lxi8PPnMC5stDw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-11.jpg&ehk=t21RezqHRjWPdstY%2bX%2fjJ%2fI2GsXu3x3VHMHeJ5ZD0oQ%3d&risl=&pid=ImgRaw&r=0",
          equipo : "Devops",
          fav:true
          },
          {
          id: uuid(),
          nombre: "juana",
          puesto: "instructora ",
          foto : "https://th.bing.com/th/id/R.b47c3d47f648bdd67b3f49abb952b3fb?rik=lxi8PPnMC5stDw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-11.jpg&ehk=t21RezqHRjWPdstY%2bX%2fjJ%2fI2GsXu3x3VHMHeJ5ZD0oQ%3d&risl=&pid=ImgRaw&r=0",
          equipo : "UX y Diseño",
          fav:false
        },
          {
          id: uuid(),
          nombre: "juana",
          puesto: "instructora ",
          foto : "https://th.bing.com/th/id/R.b47c3d47f648bdd67b3f49abb952b3fb?rik=lxi8PPnMC5stDw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-11.jpg&ehk=t21RezqHRjWPdstY%2bX%2fjJ%2fI2GsXu3x3VHMHeJ5ZD0oQ%3d&risl=&pid=ImgRaw&r=0",
          equipo : "Movil" ,
          fav:false
          }, 

          {
          id: uuid(),
          nombre: "juana",
          puesto: "instructora ",
          foto : "https://th.bing.com/th/id/R.b47c3d47f648bdd67b3f49abb952b3fb?rik=lxi8PPnMC5stDw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-11.jpg&ehk=t21RezqHRjWPdstY%2bX%2fjJ%2fI2GsXu3x3VHMHeJ5ZD0oQ%3d&risl=&pid=ImgRaw&r=0",
          equipo : "Innovacion y Gestion",
          fav: false  
          }          
          ]);
        
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },   
    {
      id: uuid(),
      titulo: "Front end",
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },   
    {
      id: uuid(),
      titulo:  "Data Science",
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },   
    {
      id: uuid(),
      titulo:  "Devops", 
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },   
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },   
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },   
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    },   
  ]);

  const activar = ()=>{
    setMostrarFormulario(!mostrarFormulario)
  }

  // registrar Colaborador
  const registrarColoborador = (colaborador)=>{
    console.table([...colaboradores, colaborador]);
    setColaboradores([...colaboradores, colaborador]);
  }

  // eliminar colaborador
  const eliminarColaborador = (id) =>{
      
      const NuevosColaboradores = colaboradores.filter((colaboradores) => colaboradores.id !== id)
      console.log(colaboradores.filter((colaboradores) => colaboradores.id !== id));
      setColaboradores(NuevosColaboradores);
  }  
  
  
  // actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log('eliminar objeto', id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }
  
//  crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo);
  setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}
  const like = (id) => {
    const colaboradoresActuailzados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActuailzados)
  }
  return (
  
    <div >
      <Header></Header>
      { mostrarFormulario && <Form equipos={
        equipos.map((equipo)=> equipo.titulo)}
        registrarColoborador={registrarColoborador}
        crearEquipo={crearEquipo}/>
      }
      
      <Miorg cambiarMostrar={activar}></Miorg>
      
      { 
      equipos.map((e, i) => <Equipos 
      key={e.titulo} 
      equipo={e}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === e.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)
      }
      
      <Footer></Footer>
    </div>
  );
}

export default App;
