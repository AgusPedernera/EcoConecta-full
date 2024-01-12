import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';
import './CardStyles.css'

const CardsCompraRopa = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/ropa'}/>
            cartas compra ropa
        </div>
    )
}

export default CardsCompraRopa
