import React from "react";
import dadosReferencias from "../../services/dadosReferencias";
import "./styles.css";

function Saiba(props) {
  return (
    <div>
      <div className="Saiba">
      
        <article>
          <h2 className="title_textAwo">Filhos da Unidade Dual</h2>
          <p>
            "A compreensão do Universo através dos números é uma dentre as
            enormes demonstrações de sofisticação presentes na cultura dos
            Iorubá. Herdeiros de parcela generosa de sua religiosidade, nós
            estamos ainda muito longe de vislumbrar o alcance de sua forma de
            entender o que nos cerca, tanto no planeta, Aiyé, quanto no Cosmo.
            Um belo exemplo, está na maneira como entendem o número 2, que é a
            base estrutural de sua percepção do mundo.<hr></hr> Na raiz de sua
            etnomatemática está a observação de que tudo que há na natureza só
            tem unicidade quando em dupla. Ou seja, a base desustentação da vida,
             que precisa da interação do elemento masculino
            com o feminino, é compreendida como sendo o encontro de metades da
            unidade chamada vida. Enquanto cristãos vivem da oposição entre céu
            e vida terrena, por exemplo, os Iorubá entendem que Orun (mundo
            espiritual, erradamente traduzido por céu), e Aiyé, são duas metade
            de uma mesma unidade, Igbadu, que pode ser compreendida como a
            Criação, a obra divina, narrada no sagrado Odu de Ifá Osá Ogundá."
            <h6>Bàbáláwo Eduardo Ifakundayo</h6>
            
          </p>
          
        </article>
        <a id="btn" href="#link">
          Saiba Mais
        </a>
        <div class="custom-shape-divider-top-1626049903">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="Title_Referencias">
          <h3 id="link">Referências para Estudo</h3>
        </div>

        <div className="Dados">
          {dadosReferencias.map((referencia) => {
            console.log(referencia);
            return (
              <>
                <aside className="card">
                  <ul>
                  <img src={referencia.imagem} alt={referencia.nome} />
                    <li>
                      <span class="material-icons">library_books </span>
                      {referencia.titulo}
                    </li>
                    <li>
                      <span class="material-icons">face </span>
                      {referencia.autoria}
                    </li>
                    <li>
                      <span class="material-icons">local_offer </span>
                      {referencia.local}
                    </li>
                    <li>
                      <span class="material-icons">login </span>
                      {referencia.site}
                    </li>
                    <li>
                      <span class="material-icons">history </span>
                      {referencia.ano}
                     
                    </li>
                   
                  </ul>
                </aside>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Saiba;
