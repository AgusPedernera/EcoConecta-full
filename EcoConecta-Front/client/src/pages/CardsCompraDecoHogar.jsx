import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsCompraDecoHogar = () => {

    return (
        <div>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/decoHogar'}/>
            cartas compra deco y hogar
        </div>
    )
}

export default CardsCompraDecoHogar

