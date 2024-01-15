import React from 'react'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import './CardStyles.css'

const CardsCompraJuguete = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Juguetes</h2>
         
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/juguetes'} />
             
            </div>
        </>
    )
}

export default CardsCompraJuguete

