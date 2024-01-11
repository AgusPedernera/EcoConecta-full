import React from 'react'
import Card from './Card'
import '../pages/DonaCompra.css'

const CardsCompra = () => {
    const arrayImagenes = [
        {
            foto: '/img/productos-cosmeticos (1) 1.png',
            h2: 'Productos de cosmética',
            direccion: '/compra/productos-cosmetica'
        },
        {
            foto: '/img/tendedero.png',
            h2: 'Ropa',
            direccion: '/compra/ruta'
        },
        {
            foto: '/img/libros.png',
            h2: 'Libros',
            direccion: '/compra/libros'
        },
        {
            foto: '/img/juguetes-para-ninos.png',
            h2: 'Juguetes'
        },
        {
            foto: '/img/decoracion-de-la-casa 1.png',
            h2: 'Deco y hogar'
        },
        {
            foto: '/img/quiosco.png',
            h2: 'Ferias'
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

export default CardsCompra
