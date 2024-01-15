import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'

const CardsDonaAlimento = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Alimentos</h2>
      
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/dona/alimentos'} />
              
            </div>
        </>
    )
}

export default CardsDonaAlimento
