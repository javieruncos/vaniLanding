import "../../../../assets/style/home/Descripcion.css";

const Descripcion = () => {
    return (
        <div className="descripcion-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="container-card">

                            <div className="card-descripcion">
                                <div className="card-descripcion-header">
                                    <i class="bi bi-instagram fs-1 color-3"></i>
                                </div>
                                <div className="card-descripcion-body container">
                                    <span className="fw-bold">INSTAGRAM</span>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing </p>

                                </div>
                            </div>
                            <div className="card-descripcion-auto">
                                <div className="card-descripcion-header">
                                <i class="bi bi-facebook fs-1 color-3"></i>
                                </div>
                                <div className="card-descripcion-body container">
                                    <span className="fw-bold">FACEBOOK</span>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="descripcion-text ">
                            <h2 className="display-6 fw-bold">DESCRIPCIÓN</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem
                                provident veritatis magnam incidunt repellendus nam? Porro accusamus et dolor
                                commodi eum, dignissimos
                                possimus dolorem minus, ipsum adipisci voluptatibus magnam
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem provident
                                veritatis magnam incidunt repellendus nam? Porro accusamus et dolor commodi eum,
                                dignissimos possimus dolorem minus, ipsum adipisci voluptatibus magnam?
                                ?</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Descripcion;