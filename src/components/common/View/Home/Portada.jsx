import "../../../../assets/style/home/portada.css";
import Estefi from "../../../../assets/img/Estefi.png"
const Portada = () => {
    return (
        <div className='portada-home'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="portada-home-text container pt-5 px-5">
                            <div className="pt-5">
                                <h1 className="display-3">gestion de redes sociales profesionales</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti reiciendis consequuntur
                                    corporis nostrum, aperiam ipsam earum consectetur vero, quo delectus quam quos rem praesentium animi
                                    reprehenderit suscipit esse dignissimos.</p>
                                <div>
                                    <button className="btn-portada">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="portada-home-img">
                            <img src={Estefi} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Portada;