import React from 'react'

import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';
import './CardStyles.css'


const CardsCompraCosmetica = () => {
    return (
        <>
            <NavBar />
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/cosmetica'} />
                cartas compra cosmetica
            </div>

        </>
    )
}

export default CardsCompraCosmetica
