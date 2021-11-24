import { useState } from 'react';

function FormProyecto(props) {
    /*{ 
        id:"1", 
        nombre:"Sistema de Control de Reservas", 
        fecha: "11/12/2021", 
        descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", 
        director:"MisionTIC 2022", 
        completado: true 
    }*/
    const proyectoLimpio = { 
        id:"", 
        nombre:"", 
        fecha: "", 
        descripcion: "", 
        director:"", 
        completado: false
    };

    const valorInicial = (props.modo !=="nuevo" ? {...props.proyecto} : {...proyectoLimpio});
    const { proyectoState , setProyecto } = useState({...valorInicial});
    console.log(proyectoState);

    //funcion para controlar el onchange de los inputs o elementos del form.
    const onInputChange = function(e) {
        const p = {...proyectoState};
        p[e.target.name] = e.target.value;
        //Agregamos validaciones a nivel cambio de cada input
        setProyecto(p);
    };
    const onFormSubmit = function(e) {
        e.preventDefault();
        //Agregamos validaciones a nivel de formulario
        props.onGuardar(proyectoState);
        //Codigo para renderizar mensaje de exito o fracaso.
        setProyecto(proyectoLimpio);
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <div className="form-group">
                <label className="control-label" htmlFor="Id" >Id</label>
                <input className="form-control" type="number" 
                       name="id" value={proyectoState.id} onChange={ onInputChange } />
            </div>
            <div className="form-group">
                <label className="control-label">Nombre</label>
                <input className="form-control" type="text" 
                       name="nombre" onChange={ onInputChange }/>
            </div>
            <div className="form-group">
                <label className="control-label">Fecha</label>
                <input className="form-control" type="date" 
                       name="fecha" onChange={ onInputChange }/>
            </div>
            <div className="form-group">
                <label className="control-label">Director</label>
                <input className="form-control" type="text" 
                       name="director" onChange={ onInputChange }/>
            </div>
            <div className="form-group">
                <label className="control-label">Descripción</label>
                <textarea className="form-control" 
                       name="descripcion" onChange={ onInputChange }>
                </textarea>
            </div>
            <div className="form-group">
                <label className="control-label">¿Completado?</label>
                <select className="form-control" 
                       name="completado" onChange={ onInputChange }>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-success mr-1" type="submit">Guardar</button>
                <button className="btn btn-danger" type="button">Cancelar</button>
            </div>
        </form>
    );
}

export default FormProyecto;