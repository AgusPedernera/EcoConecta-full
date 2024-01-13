import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'

const CardsCompraDecoHogar = () => {

    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Deco y Hogar</h2>
            <Categorias/>
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/decoHogar'} />
                
            </div>
        </>
    )
}

export default CardsCompraDecoHogar

