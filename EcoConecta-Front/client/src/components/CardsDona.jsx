import React from 'react'
import Card from './Card'

const CardsDona = () => {
    const arrayImagenes = [
        {
            foto: '/img/donacion-de-alimentos.png',
            h2: 'Alimentos'
        },
        {
            foto: '/img/tendedero.png',
            h2: 'Ropa'
        },
        {
            foto: '/img/libros.png',
            h2: 'Libros'
        },
        {
            foto: '/img/juguetes-para-ninos.png',
            h2: 'Juguetes'
        },
        {
            foto: '/img/papeleria.png',
            h2: 'Útiles escolares'
        },
        {
            foto: '/img/medicamento (1).png',
            h2: 'Medicamentos'
        },
    ]
    return (
        <div>
            {

                arrayImagenes.map((imagen, indice) => (
                    <div className="col-4" key={indice} >
                        <Card foto={imagen.foto} h2={imagen.h2} />
                    </div>
                ))

            }
        </div>
    )
}

export default CardsDona