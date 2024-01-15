import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';
import './CardStyles.css'

const CardsCompraRopa = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Tiendas de Ropa</h2>
          
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/ropa'} />
            
            </div>
        </>
    )
}

export default CardsCompraRopa
