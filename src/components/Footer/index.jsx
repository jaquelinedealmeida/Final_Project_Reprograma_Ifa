import React from "react";
import Img1 from "../../assets/img1-linkedin.svg";
import Img2 from "../../assets/img2-github.svg";
import Img3 from "../../assets/img3-instagram.svg";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="img">
      <a href="https://www.linkedin.com/in/jaqueline-de-almeida/" target="_blank" rel="noopener noreferrer"
      >
        <img src={Img1} alt="Logo Linkedin" />
      </a>

      <a  href="https://github.com/jaquelinedealmeida/" target="_blank" rel="noopener noreferrer">  
        <img src={Img2} alt="Logo GitHub" />
      </a>

      <a href="https://instagram.com/mahuwacomunicacaoecuidado/" target="_blank" rel="noopener noreferrer">
        <img src={Img3} alt="Logo Instagram" />
      </a>
      </div>
      <div className="text1">
       <p>
         2021 | Desenvolvido por <strong>Jaqueline de Almeida</strong> 
       </p>
       <h5> Todos os direitos reservados </h5>
     </div>
      </footer>
    
       
  );
};

export default Footer;
