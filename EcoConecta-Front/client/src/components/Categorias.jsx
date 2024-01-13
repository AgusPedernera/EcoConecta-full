import React, { useState } from 'react'
import imagenActiva from '../../public/img/hambu.png'
import imagenInactiva from '../../public/img/cruz.png'
import CategoriasCompra from './CategoriasCompra';



const Categorias = () => {
    const [activo, setActivo] = useState(false);
    // const [mostrar, setMostrar] = useState(false);

    const toggleClase = () => {
        setActivo(!activo);
    };

    // const mostrarOcultar = () => {
    //     setMostrar(mostrar)
    // }

  
    let imagenFuente = activo ? imagenActiva : imagenInactiva

    // let imagenFuente= activo;
    // if (imagenFuente === activo) {
    //     imagenFuente = imagenActiva,
    //         <CategoriasCompra />
    // } else {
    //     imagenFuente= imagenInactiva,
    //     <Categorias />
    // }


    return (
        <div>


            <section className="hamburger" >
                <h2>CATEGORÍAS</h2>
                <img src={imagenFuente} alt="" onClick={toggleClase} />
                {/* <button onClick={toggleClase}>{CambiarClase}</button> */}
            </section>

            {/* <section className="hamburger">
                <h2>CATEGORÍAS</h2>
                <img src={activo ? imagenActiva : imagenInactiva} alt="" onClick={toggleClase} />
                {activo ? <CategoriasCompra /> : <Categorias />}
            </section> */}

        </div>
    )
}

export default Categorias


