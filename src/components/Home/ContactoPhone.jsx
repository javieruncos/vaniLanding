import "../../assets/style/home/Contacto.css"
import celular from "../../assets/img/celular-fondo2.png"

const ContactoPhone = () => {
    return (
        <div className="container my-5">
            <div className="container-contacto">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="container-contacto-text container px-5 py-5">
                            <h4 className="display-4 fw-bold">Contactame</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti reiciendis consequuntur corporis nostrum, aperiam ipsam earum consectetur vero,</p>
                            <button>Contactame</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                         <div className="container-contacto-img">
                            <img src={celular} alt="" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactoPhone;