import React from 'react';
import Portada from './Portada';
import Descripcion from './Descripcion';

const Inicio = () => {
    return (
        <main>
            <section>
                <article>
                    <Portada></Portada>
                </article>
                <article>
                    <Descripcion></Descripcion>
                </article>
            </section>
             
        </main>
    );
};

export default Inicio;