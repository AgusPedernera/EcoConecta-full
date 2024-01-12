import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';

const CardsDonaLibros = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/dona/libros'}/>
            cartas dona libros
        </div>
    )
}

export default CardsDonaLibros
