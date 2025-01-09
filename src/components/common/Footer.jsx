import "../../assets/style/common/Footer.css"

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="container-links-footer">
                <div className="d-flex gap-5">
                    <span>Inicio</span>
                    <span>Sobre mi</span>
                    <span>Servicios</span>
                    <span>Contacto</span>
                </div>
                <div className="py-3">
                    <span>Copyright 2023</span>
                </div>
                <div className="d-flex gap-4">
                    <span>
                        <i class="bi bi-facebook"></i>
                    </span>
                    <span>
                        <i class="bi bi-instagram"></i>
                    </span>
                    <span>
                        <i class="bi bi-twitter-x"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;