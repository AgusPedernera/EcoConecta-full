import React from 'react'

import CardInfo from '../components/CardInfo'
import NavBar from './../components/NavBar';
import '../components/CardStyle.css'
import Categorias from '../components/Categorias';


const CardsCompraCosmetica = () => {
    return (
        <>
            <NavBar />
            <h2 className='tituloInfo'>Productos de Cosmética</h2>
            <Categorias/>
            <div className='conteiner-carta'>

                <CardInfo url={'http://localhost:8080/api/cards/compra/cosmetica'} />

            </div>

        </>
    )
}

export default CardsCompraCosmetica
