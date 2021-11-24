function ProyectStatus(props) {
    return (
        props.status ? <span className="badge rounded-pill bg-success">TERMINADO</span> : <span className="badge rounded-pill bg-danger">PENDIENTE</span>
    );
}

export default ProyectStatus;