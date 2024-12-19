import "../../assets/style/home/Servicios.css";
import Estefi from "../../assets/img/Estefi.png";
const Servicios = () => {
    return (
        <section>
            <div className="servicios container d-flex justify-content-center pt-4">
                <div className="w-75 text-center ">
                    <h2 className="fw-bold display-6">TAKE ADVENTAGE OF THE ENTIRE AUDIO PLATAFORM</h2>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="servicios-card1">

                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="servicios-card2">

                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="servicios-card3 color-2">

                        </div>
                    </div>
                </div>
            </div>
             <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="servicios-img">
                            <img src={Estefi} alt="" />

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6"></div>

                </div>
             </div>
        </section>
    );
};

export default Servicios;