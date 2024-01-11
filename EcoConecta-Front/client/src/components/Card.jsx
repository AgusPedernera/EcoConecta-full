import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props) => {

    return (


        <div>
            <article >
                <img src={props.foto} className="snap" />
                <NavLink to={props.direccion}>{props.h2}</NavLink>

            </article>
        </div>
    )
}

export default Card
