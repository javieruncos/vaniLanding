import "../../assets/style/home/Servicios.css";
import Estefi from "../../assets/img/Estefi.png";
const Servicios = () => {
    return (
        <section>
            <div className="servicios container d-flex justify-content-center pt-5">
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
             <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="servicios-img">
                            <img src={Estefi} alt="" />

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="servicios-text">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam natus porro obcaecati ut, architecto quod impedit officia quia quaerat aperiam placeat, distinctio aliquid in fuga quis, delectus inventore illum eveniet tempore magnam sed est veniam animi! Et, dolorem corrupti dolor id voluptates ratione odit, aperiam veritatis ullam aut amet.</p>

                        </div>
                    </div>

                </div>
             </div>
        </section>
    );
};

export default Servicios;