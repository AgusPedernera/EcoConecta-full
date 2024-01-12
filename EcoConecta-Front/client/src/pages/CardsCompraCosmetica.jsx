import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsCompraCosmetica = () => {
    return (
        <div>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/cosmetica'}/>
            cartas compra cosmetica
        </div>
    )
}

export default CardsCompraCosmetica
