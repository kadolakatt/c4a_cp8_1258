import ProyectStatus from "./ProyectStatus";

function ProyectListItem ({ completarProyecto, eliminarProyecto, editarProyecto, ...props}) {

    const onCompletarProyecto = function (e) {
      e.preventDefault();
      completarProyecto(props.id);
    }

    const onEliminarProyecto = function (e) {
      e.preventDefault();
      eliminarProyecto(props.id);
    }

    const onEditarProyecto = function (e) {
      e.preventDefault();
      editarProyecto(props);
    }

    return (
        <a href="none" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ props.nombre }</h5>
                <small>{ props.fecha }</small>
              </div>
              <ProyectStatus status={props.completado} />
              <p className="mb-1">{ props.descripcion }</p>
              <small>{ props.director }</small>
              <button className="btn btn-danger btn-sm float-end mx-lg-2"
                      onClick={ onEliminarProyecto }>Eliminar</button>
              <button className="btn btn-success btn-sm float-end mx-lg-1" onClick={ onEditarProyecto }>Editar</button>
              <button className="btn btn-primary btn-sm float-end"
                      onClick={ onCompletarProyecto }>
                { props.completado ? "Reabrir" : "Completar" }
              </button>
            </a>
    );
}

export default ProyectListItem;