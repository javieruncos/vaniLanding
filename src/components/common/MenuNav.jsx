import React from 'react';

const MenuNav = () => {
    return (
        <div className='menuNav'>
            <div className='container-logo'>
                <div className='ps-5'>
                    <span>Logo</span>
                </div>
            </div>
            <div className='container-menu-link'>
                <ul className='d-flex justify-content-center gap-5 align-items-center pt-3'>
                    <li>Home</li>
                    <li>Sobre Mi</li>
                    <li>Servicios</li>
                </ul>
            </div>
            <div className='container-menu-redes'>
                <div className='d-flex align-items-center justify-content-end gap-5  pe-5 w-100'>
                  <a href="">facebook</a>
                  <a href="">Instagram</a>
                  <a href="">Twitter</a>
                </div>
            </div>
        </div>
    );
};

export default MenuNav;