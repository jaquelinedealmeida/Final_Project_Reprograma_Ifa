import React from "react";

import "./styles.css";
import Img4 from "../../assets/img4.svg";

function Ifa(props) {
  return (
    <>
      <div className="texts">
        <div className="container_Ifa">
          <h2 className="title_Ifa">O que é Ifá? </h2>
          <p>
            Ifá é um sistema tradicional Yorubá, vindo na Nigéria - África
            Ocidental. Tem como princípio práticas de cuidado espiritual,
            filosófica e social. O Ifá usa como metolodologia um sistema binário
            de I e II, chamado Odus para acesso oracular que permite ao
            consulente receber orientaçõe. Esta consulta é realizada pelo
            Babalawo - pai do segredo, ou pela Iyanifá - mãe de Ifá, seguindo
            orientações de Orunmila, o sacerdote maior desta tradição, chamado
            Èléri Ípìn - o testemunho da criação e/ou destino. São 16 Odus
            principais, chamados Meji, e deles se derivam mais 240, chamodos Omo
            Odus, filhos dos Odus. No total de 256 Odus. Cada Odu é representado
            por um símbolo/diagrama/sinal específico de natureza binária
          </p>
          <p>
            São mais de 1600 Ese /versos (informações) em cada dado(Odu) que
            servem de base para as orientações repassadas pelo sacerdote ou
            sacerdotisa para o consulente, de acordo com o que ele precisa
            realizar para conduzir melhor a sua vida. Durante milênios, todos
            estes versos foram memorizados pelos sacerdotes/isas e transmitidos
            oralmente. Somente recentemente passaram a ser escritos.
          </p>
        </div>

        <img src={Img4} alt="Ilustração etnica da África" />

        <div className="container_alg">
          <h2 className="title_Algoritmos"> O Sistema Binário</h2>
          <p>
            {" "}
            A relação de Ifá com o sistema binário tem sem ponto de contato através da perpepção 
            do modo como estes sistemas se realizam: ligado e desligado; não e
            sim; falso e verdadeiro; 0 e 1.
          </p>
          <p>
            A partir deste sistema é possível realizar operações lógicas,
            aritméticas e representar números, símbolos e caracteres. Os Odus,
            através dos seus símbolos gráficos utilizam-se desta mesma
            percepção, incluindo primordialmente os aspectos da Natureza -
            contração e expansão, negativo-poitivo, para configurar o seu
            sistema. Coisa que o computador não faz! Entretanto, assim como o
            computador, no jogo de Ifá são utilizados algoritmos - uma sequência
            de ações finitas para resolução de um problema.
          </p>
          <p>
            Tanto no sistema binário da computação (0 e 1) quanto o de Ifá (1 e
            2), há algoritimos a serem executados. Na execução os comandos se
            processo e o resultado sempre será uma saída compatível com a
            solicitação de entrada. Ifá é baseado no padrão de 8 bits:cadeia de
            8 padrões, que gera 16 Odus principais(mãe/pai) e, nas suas
            combinações 256 Odus filhas/os.
          </p>
        </div>
      </div>

      <div className="container_Unesco">
        <h2 className="titlle_Unesco">
          Patrimônio Cultura Imaterial da Humanidade <br></br> (Incluído em 2008 proclamada em 2005)
        </h2>
        <p className="text">
          "O sistema de adivinhação Ifa, que faz uso de um extenso corpus de
          textos e fórmulas matemáticas, é praticado entre as comunidades
          iorubás e pela diáspora africana nas Américas e no Caribe. A palavra
          Ifa refere-se à figura mística Ifa ou Orunmila, considerada pelos
          iorubás como a divindade da sabedoria e do desenvolvimento
          intelectual.</p>
          <br></br>
         
         <p className="text">Em contraste com outras formas de adivinhação na região
          que empregam mediunidade espiritual, a adivinhação Ifa não depende de
          uma pessoa com poderes oraculares, mas sim de um sistema de sinais que
          são interpretados por um adivinho, o sacerdote Ifa ou babalawo,
          literalmente "do sacerdote pai". O sistema de adivinhação Ifa é
          aplicado sempre que uma importante decisão individual ou coletiva deve
          ser tomada.</p>
          <br></br>
         
           <p className ="text">O corpus literário Ifa, denominado odu, consiste em 256
          partes subdivididas em versos denominados ese, cujo número exato é
          desconhecido por estarem constantemente aumentando (são cerca de 800
          ese por odu). Cada um dos 256 odu tem sua assinatura de divinação
          específica, que é determinada pelo babalawo usando nozes de palmeira
          sagradas e uma corrente de adivinhação. O ese, considerado a parte
          mais importante da adivinhação Ifa, são cantados pelos sacerdotes em
          linguagem poética. Estes refletem a história, língua, crenças,
          cosmovisão e questões sociais contemporâneas iorubás. O conhecimento
          de Ifá foi preservado nas comunidades iorubás e transmitido entre os
          sacerdotes Ifá.</p>
          <br></br>
          <p className = "text">Sob a influência do domínio colonial e das pressões
          religiosas, as crenças e práticas tradicionais foram discriminadas. Os
          sacerdotes de Ifa, muitos dos quais são bastante idosos, têm apenas meios
          modestos para manter a tradição, transmitir seus conhecimentos
          complexos e treinar futuros praticantes. Como resultado, os jovens e o
          povo iorubá estão perdendo o interesse em praticar e consultar a
          adivinhação Ifá, o que anda de mãos dadas com a crescente intolerância
          aos sistemas tradicionais de adivinhação em geral." </p>
          <h6>Unesco</h6>
      </div>
    </>
  );
}

export default Ifa;
