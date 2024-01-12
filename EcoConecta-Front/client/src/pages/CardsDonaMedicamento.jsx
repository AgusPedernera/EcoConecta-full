import React from 'react'
import NavBar from './../components/NavBar';
import CardInfo from '../components/CardInfo';

const CardsDonaMedicamento = () => {
    return (
        <div className='conteiner-carta'>
            <NavBar/>
            <CardInfo url={'http://localhost:8080/api/cards/dona/medicamentos'}/>
            cartas dona Medicamento
        </div>
    )
}

export default CardsDonaMedicamento
