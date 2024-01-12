import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'

const CardsCompraDecoHogar = () => {

    return (
        <>
            <NavBar />
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/decoHogar'} />
                cartas compra deco y hogar
            </div>
        </>
    )
}

export default CardsCompraDecoHogar

