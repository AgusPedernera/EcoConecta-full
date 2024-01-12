import React from 'react'

import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';

const CardsCompraCosmetica = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/cosmetica'}/>
            cartas compra cosmetica
        </div>
    )
}

export default CardsCompraCosmetica
