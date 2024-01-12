import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsDonaUtiles = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/dona/utiles'}/>
            cartas dona utiles
        </div>
    )
}

export default CardsDonaUtiles
