import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardInfo = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        // Define la función asincrónica para realizar la solicitud GET
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/cards/compra');
                setCardsData(response.data);  // Actualiza el estado con los datos recibidos
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        // Llama a la función fetchData cuando el componente se monta
        fetchData();

        // Puedes agregar dependencias al arreglo de dependencias de useEffect si es necesario
    }, []);

    return (
        <div>
            <h1>Mis Tarjetas</h1>
            <ul>
                {cardsData.map((card) => (
                    <li key={card._id}>{card.nombre} - {card.categoria}</li>
                    // Ajusta esta parte según la estructura de tus datos
                ))}
            </ul>
        </div>
    );
};

export default CardInfo;
