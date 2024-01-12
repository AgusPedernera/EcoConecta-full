import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'

const CardsDonaJuguetes = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar />
                <CardInfo url={'http://localhost:8080/api/cards/dona/juguetes'} />
            cartas dona juguetes
        </div>
    )
}

export default CardsDonaJuguetes
