//import './App.css';
import NavBar from './components/NavBar';
import ProyectList from './components/ProyectList';
import Footer from './components/Footer';
import { Fragment, useState } from 'react';

import './css/bootstrap.css'


function App() {

  /*Vector de datos usada en el CP6 */
  /*const lista_datos = [
    { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022", completado: true },
    { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022", completado: false },
    { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022", completado: false },
    { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022", completado: false },
    { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022", completado: false }
  ];*/
  
  /*Agregamos el vector lista_datos al State de App */
  const [lista_datos, setListaDatos] = useState([
    { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022", completado: true },
    { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022", completado: false },
    { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022", completado: false },
    { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022", completado: false },
    { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022", completado: false }
  ]);

  const datos_empresa = {
    compania: "Republica de Colombia",
    division: "Ministerio de las TIC",
    direccion: "Dirección: Calle 000 # 000 - 000",
    telefono: "Teléfono: +57 5 000 0000",
    ciudad: "Baranquilla - Colombia"
  };

  const completarProyecto = function(id) {
    const nuevosProyectos = [...lista_datos];
    const proyecto = nuevosProyectos.find( (p) => p.id === id);
    proyecto.completado = !proyecto.completado;
    setListaDatos(nuevosProyectos);
  }

  const eliminarProyecto = function(id) {
    const nuevosProyectos = lista_datos.filter( (p) => p.id !== id);
    setListaDatos(nuevosProyectos);
  }

  //Metodo que agrega un proyecto nuevo al estado lista_datos de App.
  const agregarProyecto = function(newProyect) {
    const nuevosProyectos = [...lista_datos];
    nuevosProyectos.push(newProyect);
    setListaDatos(nuevosProyectos);
  }

  //Metodo que actualizar un proyecto en el estado lista_datos de App.
  const actualizarProyecto = function(newProyect) {
    const nuevosProyectos = [...lista_datos];
    const proyect = nuevosProyectos.find( (p)=> p.id === newProyect.id);
    for (var attr in proyect) {
      proyect[attr] = newProyect[attr];
    }
    setListaDatos(nuevosProyectos);
  }

  return (
      <Fragment>
        <NavBar />
        <ProyectList proyectos={ lista_datos } completarProyecto={completarProyecto}
                     eliminarProyecto={eliminarProyecto}
                     actualizaProyecto={actualizarProyecto}
                     agregarProyecto={agregarProyecto} />
        <Footer {...datos_empresa}  />
      </Fragment>
  );
}

export default App;
