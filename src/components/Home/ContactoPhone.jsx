import "../../assets/style/home/Contacto.css"
import celular from "../../assets/img/vaninaInst.png"

const ContactoPhone = () => {
    return (
        <div className="container my-5">
            <div className="container-contacto" >
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="container-contacto-text container px-5 py-5" data-aos="fade-down">
                            <h4 className="display-3 fw-bold">Contactame para más información</h4>
                            <button className="mt-5">Contactame</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                         <div className="container-contacto-img" data-aos="fade-left">
                            <img src={celular} alt="" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactoPhone;