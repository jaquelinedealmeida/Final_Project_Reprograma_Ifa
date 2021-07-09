import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return (
        <div className="nav">
           <ul className="menu">
             <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link className="link" to="ifa">Ifá e Algoritmos</Link>
            </li>
            <li>
                <Link className="link" to="saiba">Saiba Mais</Link>
            </li>
    
            <li>
                <Link className="link" to="autora">Autora</Link>
            </li>
            
            </ul>
        </div>
    )
}

export default Menu