import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props) => {

    return (


        <div>
            <article >
                <img src={props.foto} className="snap" />
                <a href={props.direccion}>{props.h2}</a>

            </article>
        </div>
    )
}

export default Card
