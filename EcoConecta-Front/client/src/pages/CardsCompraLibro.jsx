import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsCompraLibro = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/libros'}/>
            cartas compra libro
        </div>
    )
}

export default CardsCompraLibro

