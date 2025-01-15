import "../../assets/style/home/Phone.css";
import vaniPhone from "../../assets/img/vani-phone2.png";

const Phone = () => {
    return (
        <div className='container-phone container' data-aos="fade-up">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-7">
                    <div className="container pt-5 mt-4 px-5">
                        <div className=" titulo-contacto" data-aos="fade-up">
                            <h3 className=" fw-bold">Contactame</h3>
                        </div>
                        <div className="info-phone my-3  py-3 px-4 " data-aos="fade-right">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iure eum minima possimus natus expedita facilis? Optio est praesentium in.</p>
                        </div>
                        <div className="info-phone my-3  py-3 px-4 " data-aos="fade-right">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iure eum minima possimus natus expedita facilis? Optio est praesentium in.</p>
                        </div>
                        <button className="btn-Phone mt-3" data-aos="fade-right">Contactame</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="phone-img container"  data-aos="fade-left">
                        <img src={vaniPhone} alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Phone;