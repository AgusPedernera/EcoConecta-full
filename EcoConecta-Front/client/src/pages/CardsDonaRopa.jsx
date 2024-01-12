import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'

const CardsDonaRopa = () => {
    return (
        <div className='conteiner-carta'> 
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/dona/ropa'}/>
            cartas dona ropa
        </div>
    )
}

export default CardsDonaRopa
