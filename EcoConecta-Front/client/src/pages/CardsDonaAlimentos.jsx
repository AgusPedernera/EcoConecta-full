import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsDonaAlimento = () => {
    return (
        <div>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/dona/alimentos'}/>
            cartas dona alimento
        </div>
    )
}

export default CardsDonaAlimento
