import React from 'react'
import NavBar from '../components/NavBar'

const getProducts = async () => {
    const products = await http.get('http://127.0.0.1:8080/api/cards/compra/ferias');
    products.forEach(product => {
        console.log(product);
        addProductToList(product);
    });
};
const CardsCompraFeria = () => {
    return (
        <div>
            <NavBar/>
            {getProducts()}
        </div>
    )
}

export default CardsCompraFeria
