import "../../../../assets/style/home/portada.css";
import Estefi from "../../../../assets/img/Estefi.png"
const Portada = () => {
    return (
        <div className='portada-home'>
            <div className="capaPortada">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="column-portada container">
                                <span className="display-6 fw-bold color-5">GESTION PROFESIONAL</span>
                                <h1 className="display-5 fw-bold"> DE REDES SOCIALES</h1>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum labore amet quia sapiente at sequi dolor neque reprehenderit dolorem quis?</span>
                                <div className="btn-portada mt-2">
                                    <button>VER MÁS</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="column-img-portada">
                             <img src={Estefi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portada;