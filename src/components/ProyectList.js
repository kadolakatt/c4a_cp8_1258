import ProyectListItem from "./ProyectListItem";
import Paginator from "./Paginator";
import FormProyecto from "./FormProyecto";

import { Modal } from 'react-bootstrap';
import { useState } from 'react';


function ProyectList(props) {

    const proyectos = props.proyectos;
    
    const [paramModal, setParaModal ] = useState({
        titulo: "",
        mostrar: false,
        modo: "nuevo",
        proyecto: null,
        guardarProyecto: null
    });


    //Funciones para controlar los eventos del modal
    const onCerrarModal = function() {
        const paramNuevo = {...paramModal};
        paramNuevo.mostrar = false;
        setParaModal(paramNuevo);
    }
    
    const onRegistrarProyecto = function () {
        const paramNuevo = {...paramModal};
        paramNuevo.modo = "nuevo";
        paramNuevo.mostrar = true;
        paramNuevo.titulo = "Registrar Proyecto";
        paramNuevo.guardarProyecto = props.agregarProyecto;
        paramNuevo.proyecto = null;
        setParaModal(paramNuevo);
    }
    
    const onEditarProyecto = function (p) {
        const paramNuevo = {...paramModal};
        paramNuevo.modo = "editar";
        paramNuevo.mostrar = true;
        paramNuevo.titulo = "Actualizar Proyecto";
        paramNuevo.guardarProyecto = props.actualizaProyecto;
        paramNuevo.proyecto = p;
        setParaModal(paramNuevo);
    }

    //Asignación de props a ProyectListItem de forma estática
    /*const listaProyectos = proyectos.map( p => 
            <ProyectListItem
                id={p.id}
                nombre={p.nombre}
                descripcion={p.descripcion}
                fecha={p.fecha}
                director={p.director}
                completado={p.completado}
            />);*/
    
    //Esto hace lo mismo que las lineas anteriores asignando props
    //pero con destructuración de objetos logramos que se desea dinámica y menos codigo.
    const listaProyectos = proyectos.map((p) =>  
        <ProyectListItem key={p.id} 
        completarProyecto={props.completarProyecto} 
        eliminarProyecto={props.eliminarProyecto}
        editarProyecto={ onEditarProyecto }
        {...p} 
    />);

    return (
        <div className="container-fluid" >
        <div className="card mt-5">
            <div className="card-body">
                <button id="btnRegistrarNov" 
                        className="btn btn-lg btn-success float-end"
                        onClick={ onRegistrarProyecto }>
                            Registrar Proyecto
                </button>
                <h3>Dashboard</h3>
                <h5 className="text-muted">Bienvenido al portal de MINTIC de Proyectos y Noticias</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit massa, placerat ac turpis vel, fringilla aliquet ex. Sed quis ante aliquet, venenatis turpis eget, ultricies lacus</p>
            </div>
        </div>
        <div className="list-group m-5">
            { listaProyectos }
        </div>
        <Paginator />
        <Modal show={ paramModal.mostrar } onHide={onCerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>{ paramModal.titulo }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormProyecto modo={paramModal.modo}
                          onCancelar={onCerrarModal}
                          onGuardar={paramModal.guardarProyecto }
                          proyecto={ paramModal.proyecto } />
          </Modal.Body>
        </Modal>
      </div>
    );
}

export default ProyectList;