import React from 'react'
import Card from './Card'

const CardsDona = () => {
    const arrayImagenes = [
        {
            foto: '/img/donacion-de-alimentos.png',
            h2: 'Alimentos',
            direccion:'',
            direccion: '/dona/alimentos'
        },
        {
            foto: '/img/tendedero.png',
            h2: 'Ropa',
            direccion: '/dona/ropa'
        },
        {
            foto: '/img/libros.png',
            h2: 'Libros',
            direccion:'/dona/libros'
        },
        {
            foto: '/img/juguetes-para-ninos.png',
            h2: 'Juguetes',
            direccion: '/dona/juguetes'
        },
        {
            foto: '/img/papeleria.png',
            h2: 'Útiles escolares',
            direccion: '/dona/utiles'

        },
        {
            foto: '/img/medicamento (1).png',
            h2: 'Medicamentos',
            direccion: '/dona/medicamentos'
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