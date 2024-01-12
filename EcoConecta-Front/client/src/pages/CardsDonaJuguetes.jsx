import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsDonaJuguetes = () => {
    return (
        <div>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/dona/juguetes'}/>
            cartas dona juguetes
        </div>
    )
}

export default CardsDonaJuguetes
