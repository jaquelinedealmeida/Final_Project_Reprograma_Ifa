import React from "react";
import dadosReferencias from "../../services/dadosReferencias";
import "./styles.css";

function Saiba(props) {
  return (
    <div>
      <div className="Saiba">
        <div>
          <h3 className="title_textAwo">FILHOS DA UNIDADE DUAL</h3>
          <p>
            {" "}
            A compreensão do Universo através dos números é uma dentre as
            enormes demonstrações de sofisticação presentes na cultura dos
            Iorubá. Herdeiros de parcela generosa de sua religiosidade, nós
            estamos ainda muito longe de vislumbrar o alcance de sua forma de
            entender o que nos cerca, tanto no planeta, Aiyé, quanto no Cosmo.
            Um belo exemplo, está na maneira como entendem o número 2, que é a
            base estrutural de sua percepção do mundo. Na raiz de sua
            etnomatemática está a observação de que tudo que há na natureza só
            tem unicidade quando em dupla. Ou seja, a base de sustentação da
            vida, que precisa da interação do elemento masculino com o feminino,
            é compreendida como sendo o encontro de metades da unidade chamada
            vida. Enquanto cristãos vivem da oposição entre céu e vida terrena,
            por exemplo, os Iorubá entendem que Orun (mundo espiritual,
            erradamente traduzido por céu), e Aiyé, são duas metade de uma mesma
            unidade, Igbadu, que pode ser compreendida como a Criação, a obra
            divina, narrada no sagrado Odu de Ifá Osá Ogundá.
          </p>
        </div>
        {/* <a href="#conteudo" >Saiba Mais</a> botão interno não usado */ }
          <div className="Title_Referencias">
           <h2>Referências para Estudo</h2>
         </div>
      
        <div className="Dados">
          {dadosReferencias.map((referencia) => {
            console.log(referencia);
            return (
              <>
                
                <div className="card">
                  <ul>
                    <li>
                      <span class="material-icons">library_books</span>
                      {referencia.titulo}
                    </li>
                    <li>
                      <span class="material-icons">face</span>
                      {referencia.autoria}
                    </li>
                    <li>
                      <span class="material-icons">local_offer</span>
                      {referencia.local}
                    </li>
                    <li>
                      <span class="material-icons">login</span>
                      {referencia.site}
                    </li>
                    <li>
                      <span class="material-icons">history</span>{" "}
                      {referencia.ano}
                    </li>
                    <img src={referencia.imagem} alt={referencia.nome} />
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Saiba;
