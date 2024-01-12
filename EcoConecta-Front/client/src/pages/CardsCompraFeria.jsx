import React from 'react'
import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';


const CardsCompraFeria = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/compra/ferias'}/>
        </div>
    )
}

export default CardsCompraFeria
