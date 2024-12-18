import React from 'react';
import Portada from './Portada';
import Servicios from './Servicios';


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