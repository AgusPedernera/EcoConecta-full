import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';
import './CardStyles.css'

const CardsDonaMedicamento = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Medicamentos</h2>
        
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/dona/medicamentos'} />
             
            </div>
        </>
    )
}

export default CardsDonaMedicamento
