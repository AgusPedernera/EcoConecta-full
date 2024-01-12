import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'


const CardsCompraFeria = () => {
    return (
        <div>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/ferias'}/>
        </div>
    )
}

export default CardsCompraFeria
