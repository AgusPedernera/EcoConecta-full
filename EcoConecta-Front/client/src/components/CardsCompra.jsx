import React from 'react'
import Card from './Card'
import '../pages/DonaCompra.css'

const CardsCompra = () => {
    const arrayImagenes = [
        {
            foto: '/img/productos-cosmeticos (1) 1.png',
            h2: 'Productos de cosmética',
            direccion:'/compra/cosmetica'
        },
        {
            foto: '/img/tendedero.png',
            h2: 'Ropa',
            direccion: '/compra/ropa'
        },
        {
            foto: '/img/libros.png',
            h2: 'Libros',
            direccion: '/compra/libros'
        },
        {
            foto: '/img/juguetes-para-ninos.png',
            h2: 'Juguetes',
            direccion: '/compra/juguetes'
        },
        {
            foto: '/img/decoracion-de-la-casa 1.png',
            h2: 'Deco y hogar',
            direccion:'/compra/DecoHogar'
        },
        {
            foto: '/img/quiosco.png',
            h2: 'Ferias',
            direccion: '/compra/ferias'
        },
    ]
    return (
        <div>
            {

                arrayImagenes.map((imagen, indice) => (
                    <div className="col-4" key={indice} >
                        <Card foto={imagen.foto} h2={imagen.h2} direccion ={imagen.direccion} />
                    </div>
                ))

            }
        </div>
    )
}

export default CardsCompra
