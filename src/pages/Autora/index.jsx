import React, { useEffect, useState } from "react";

import Axios from "axios";
import "./styles.css";

const Autora = () => {
  const [usuaria, setUsuaria] = useState([]);

  async function getUser() {
    const resposta = await Axios.get(
      "https://my-json-server.typicode.com/jaquelinedealmeida/perfil/db"
    );
    setUsuaria(resposta.data.perfil[0]);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="author">
        <div className="avatar">
          <img src={usuaria.avatar_url} alt="imagem usuaria" />
          <ul className="dados">
            <h6>{usuaria.name}</h6>
            <li>
              <span class="material-icons">book</span>
              {usuaria.bio}
            </li>
            <li>
              <span class="material-icons">room</span>
              {usuaria.location}
            </li>
            <li>
              <span class="material-icons">account_box</span>
              <a href={usuaria.page}>Linkedin: Jaqueline de Almeida
            </a>
            </li>
          </ul>
        </div>

        <div className="Bio">
          <h2>Sobre Mim</h2>
          <p>
            Há mais de 10 anos pesquiso sobre cuidados naturais, 
            autocuidado,  e autoconhecimento e há 4 anos conheci o Ifá. Integro a
            Egbé Orúnmíla Atí Obatalá Adésina Ifákundayo, comunidade que estudo sobre os
            Odus e Orisás há quase dois anos.
          </p> 

          <p>
            Comunicológa, formada em Comunicação/Relações Públicas, por 15 anos
            atua na área de comunicação digital, relacionamento e  produção de eventos. 
          </p>

          <p>
            Desenvolvedora Front-End e UX Design, iniciei
            os estudos de Programação e Desenvolvimento Front-End com a
            Reprograma: UX Design, HTML, CSS, Node Js,Javascript, React, em 2021, tendo passado 
            pela Cellep, Gama Academy e atualmente estudando na Rocketseet e Design Circuit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Autora;
