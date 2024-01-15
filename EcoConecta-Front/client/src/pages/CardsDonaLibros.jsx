import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';
import './CardStyles.css'

const CardsDonaLibros = () => {
    return (
        <>
        <NavBar/>
        <h2 className='tituloInfo'>Libros</h2>
    
        <div className='conteiner-carta'>
            
            <CardInfo url={'http://localhost:8080/api/cards/dona/libros'}/>
       
        </div>
        </>
    )
}

export default CardsDonaLibros
