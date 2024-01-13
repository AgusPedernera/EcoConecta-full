import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'

const CardsDonaUtiles = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Útiles escolares</h2>
            <Categorias />
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/dona/utiles'} />

            </div>
        </>
    )
}

export default CardsDonaUtiles
