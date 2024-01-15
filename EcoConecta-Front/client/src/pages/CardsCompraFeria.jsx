import React from 'react'
import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';
import './CardStyles.css'



const CardsCompraFeria = () => {

    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Ferias</h2>
            
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/ferias'} />
            </div>
        </>

    )
}

export default CardsCompraFeria
