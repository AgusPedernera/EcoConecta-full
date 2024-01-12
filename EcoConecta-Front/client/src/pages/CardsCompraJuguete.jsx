import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsCompraJuguete = () => {
    return (
        <div>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/juguetes'}/>
            cartas compra juguete
        </div>
    )
}

export default CardsCompraJuguete

