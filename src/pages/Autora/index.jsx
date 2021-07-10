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
          </ul>
        </div>

        <div className="Bio">
          <h2>Sobre Mim</h2>
          <p>
            Sou uma buscadora de mim. Há mais de 10 anos pesquiso sobre
            autocuidado e autoconhecimento e há 4 anos conheci o Ifá. 
            Integro a Egbé Orúnmíla Atí Obatalá Adésina Ifakundayo, aonde estudo
            sobre os Odus e Orisás há um ano.
          </p>

          <p>
            Comunicológa, formada em Comunicação/Relações Públicas, há 10  anos atua na área
            com comunicação digital, comunicação interna, atendimento, relacionamento e produção
            de eventos. Também Terapeuta Integrativa e Sistêmica, realizo há 7
            anos atendimentos e oficinas voltadas para práticas de
            autoconhecimento e com tecnologias ancestrais de cuidado.
          </p>

          <p>
            No momento sigo em transição de carreira para a área de TI. Iniciei
            os estudos de Programação e Desenvolvimento Front-End com a
            Reprograma: UX Design, HTML, CSS, Node JsJavascript, React, (2021) e
            sigo estudando Front-End na Gama Acaddemy e Desenvolvimento Full
            Stack (Java) na Dio; além do Método Kaban e Scrum na Udemy. Quero
            voar alto com a Tecnologia e aprofundar a pesquisa sobre as
            Tecnologias Ancestrais entre Ifá e o Sistema Binário.
          </p>
        </div>
      </div>
    </>
  );
};

export default Autora 