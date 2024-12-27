import React from 'react';
import "../../components/Home/Portada.jsx"
import Servicios from './Servicios';
import Portada from '../../components/Home/Portada.jsx';
import ContactoPhone from './ContactoPhone.jsx';
import Preguntas from './Preguntas.jsx';
import Phone from './Phone.jsx';


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
                <article className='py-5'>
                    <Phone></Phone>
                </article>
                <article>
                    <Preguntas></Preguntas>
                </article>
            </section>
        </main>
    );
};

export default Inicio;