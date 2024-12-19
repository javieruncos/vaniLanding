import React from 'react';
import "../../components/Home/Portada.jsx"
import Servicios from './Servicios';
import Portada from '../../components/Home/Portada.jsx';


const Inicio = () => {
    return (
        <main>
            <section>
                <article>
                <Portada></Portada>
                </article>
                <article className='container-servicios mt-5'>
                <Servicios></Servicios>
                </article>
            </section>

        </main>
    );
};

export default Inicio;