import React from 'react';
import "../../assets/style/common/Menu.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary menu">
            <Container className='container-menu'>
                <Navbar.Brand href="#home" className='name-menu'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Sobre Mi</Nav.Link>
                        <Nav.Link href="#link">Servicios</Nav.Link>
                    </Nav>
                    <div className='menu-redes'>
                        <a href="">
                            <i class="bi bi-facebook fs-3"></i>
                        </a>
                        <a href="">
                            <i class="bi bi-instagram fs-3"></i>
                        </a>
                        <a href="">
                        <i class="bi bi-tiktok fs-3"></i>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;