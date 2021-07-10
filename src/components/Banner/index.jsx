import React from 'react'

import Img from '../../assets/imgafrica.svg'
import './styles.css'

const Banner = () => {
    return(
        <div className="main">
            <div>
                <h1> Tech Ancestral => Ifá: um sistema binário </h1>
            </div>
        
        <img src={Img} alt="Ilustração etnica da África"/>
        </div>
    )
}


export default Banner