import React from 'react'
import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';
import './CardStyles.css'



const CardsCompraFeria = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
        <>
        <NavBar/>
        <div className='conteiner-carta'>
            
            <CardInfo url={'http://localhost:8080/api/cards/compra/ferias'}/>
        </div>

    )
}

export default CardsCompraFeria
