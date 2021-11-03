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
            Sou uma buscadora de mim. Há mais de 10 anos pesquiso sobre cuidados naturais, 
            auto-cuidado,  e auto-conhecimento e há 4 anos conheci o Ifá. Integro a
            Egbé Orúnmíla Atí Obatalá Adésina Ifákundayo, aonde estudo sobre os
            Odus e Orisás há  mais de um ano.
          </p>

          <p>
            Comunicológa, formada em Comunicação/Relações Públicas, há 10 anos
            atua na área de comunicação digital, relacionamento e  produção de eventos. Também Terapeuta
            Integrativa e Sistêmica, realizo há 7 anos atendimentos e oficinas
            voltadas para práticas de auto-conhecimento e com tecnologias
            ancestrais de cuidado.
          </p>

          <p>
            No momento sigo em transição de carreira para a área de TI. Iniciei
            os estudos de Programação e Desenvolvimento Front-End com a
            Reprograma: UX Design, HTML, CSS, Node Js,Javascript, React, em 2021.
            No momento, segue seus estudos em UX Design, mas sempre atenta ao algortimos.
          </p>
        </div>
      </div>
    </>
  );
};

export default Autora;
