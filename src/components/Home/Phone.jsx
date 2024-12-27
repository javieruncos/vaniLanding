import "../../assets/style/home/Phone.css";
import celular from "../../assets/img/vaninaInst.png"

const Phone = () => {
    return (
        <div className='container-phone container'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-7">
                    <div className="container pt-5 mt-4 px-5">
                        <div className="container">
                            <h3 className="display-5  fw-bold">Ponte en contacto conmigo</h3>
                        </div>
                        <div className="info-phone my-3  py-3 px-4 ">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iure eum minima possimus natus expedita facilis? Optio est praesentium in.</p>
                        </div>
                        <div className="info-phone my-3  py-3 px-4 ">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iure eum minima possimus natus expedita facilis? Optio est praesentium in.</p>
                        </div>
                        <button className="btn-Phone mt-3">Contactame</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="phone-img container">
                        <img src={celular} alt=""></img>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Phone;