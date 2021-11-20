import React from "react";
import Img1 from "../../assets/img1-linkedin.svg";
import Img2 from "../../assets/img2-github.svg";
import Img3 from "../../assets/img3-instagram.svg";
import Img5 from "../../assets/imgtech-ancestral-1.png"

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">


      <div className="text1">
      <img src={Img5} alt ="Logo Tech Ancestral" />
       <p>
         2021 | Desenvolvido por <strong>Jaqueline de Almeida</strong> 
       </p>
       <p> Todos os direitos reservados </p>
     </div>
     
     <div className="img-footer">
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
      </footer>
    
       
  );
};

export default Footer;
