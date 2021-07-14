import React from 'react'

import Img from '../../assets/imgafrica.svg'
import './styles.css'

const Banner = () => {
    return(
        <div className="main">
            <div>
                <h1> Tech Ancestral</h1>
                <h2>IFÁ => um sistema binário</h2>
            </div>
        
        <img src={Img} alt="Ilustração etnica da África"/>
        </div>
    )
}


export default Banner