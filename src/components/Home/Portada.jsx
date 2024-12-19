import "../../assets/style/home/Portada.css";
import Estefi from "../../assets/img/Estefi.png"
const Portada = () => {
    return (
        <div className='portada-home'>
            <div className="container portada-container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="portada-home-text container pt-5 px-4">
                            <div className="pt-5">
                                <h1 className="display-3">gestion de redes  profesionales</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti reiciendis consequuntur
                                    corporis nostrum, aperiam ipsam earum consectetur vero, </p>
                                <div>
                                    <button className="btn-portada">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 position-relative">
                        <div className="pe-4 e">
                            <div className="portada-home-img ">
                                <img src={Estefi} alt="" />
                            </div>
                            <div className="item-portada-info">
                                <div></div>
                            </div>
                            <div className="item-portada-instagram">
                                <div className="avatar-instagram">
                                    <img src={Estefi} alt="" />
                                </div>
                                <div className="instagram-name">@soyvanina</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Portada;