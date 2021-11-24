function Footer(props) {
    return (
        <footer className="bg-primary text-white mt-5 mt-lg-3">
        <div className="container-fluid">
            <div className="card bg-primary">
                <div className="card-body">
                    <h2>{ props.compania }</h2>
                    <h4>{ props.division }</h4>
                    <p>{ props.direccion }</p>
                    <p>{ props.telefono }</p>
                    <p>{ props.ciudad }</p>
                </div>
            </div>
        </div>
      </footer>
    );
}

export default Footer;