import React from 'react'

const Card = (props) => {
    const redireccion = () =>{
        switch (props.h2) {
            case props.h2 === 'Ropa':
                cambia la ruta
                break;
        
            default:
                break;
        }
    }
    
    return (


        <div>
            <article >
                <img src={props.foto} className="snap" />
                <h2>{props.h2}</h2>

            </article>
        </div>
    )
}

export default Card
