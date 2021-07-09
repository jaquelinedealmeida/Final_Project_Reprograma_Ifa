import React from 'react'
import Img1 from '../../assets/img1-linkedin.svg'
import Img2 from '../../assets/img2-github.svg'
import Img3 from '../../assets/img3-instagram.svg'

import './styles.css'

const Footer = () => {
    return(
        <div className ="footer">

          <div className ="text1">
          <p>Produzido por <strong>Jaqueline de Almeida</strong></p>
          </div>  
          <div className ="text2">
              <p>Projeto Final do <strong>Bootcamp da Reprograma, 2021</strong></p>
          </div>        

              <div className="reserved">
                <h5>Todos os direitos reservados</h5>
              </div>
              
                <div className="redes_link">
                < a className="Link"  href="https://www.linkedin.com/in/jaqueline-de-almeida/">
                    <img src={Img1} alt="Logo Linkedin"/>
                </a>

                < a className="Link"  href="https://github.com/jaquelinedealmeida/">
                    <img src={Img2} alt="Logo GitHub"/>
                </a>

                < a className="Link"  href="https://instagram.com/mahuwacomunicacaoecuidado/">
                    <img src={Img3} alt="Logo Instagram"/>
                </a>
            </div>

          </div>
      
    )
}



export default Footer