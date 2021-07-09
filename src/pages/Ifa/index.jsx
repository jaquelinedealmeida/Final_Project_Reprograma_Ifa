import React from 'react'

import './styles.css'
import Img4 from '../../assets/img4.svg'

function Ifa(props) {
    return(
        <>
        <div className="texts">
         <div>
                <h2 className="title_Ifa">O que é Ifá? </h2>
                <p className="text_ifa"> Ifá é um sistema tradicional Yorubá, localizado na Nigéria - África Ocidental
                    Tem como princípio a prática espiritual, filosófica e social.
                    O Ifá usa como metologodia um sistema binário de I e II, chamado Odus  para o acesso oracular 
                    que permite ao consulente receber orientações de cuidado.
                    Esta consulta é realizada pelo Babalawo - pai do segredo, ou pela  Iyanifá - mãe de Ifá,
                    seguindo orientações de Orunmila, o sacerdote maior desta tradição, chamado Èléri Ípìn - 
                    o testemunho da criação e/ou destino.
                    
                    São 16 Odus principais, chamados Meji,  e deles se derivam mais 240, chamodos Omo Odus, filhos dos Odus.
                    No total de 256 Odus. Cada Odu é representado por um símbolo/diagrama/sinal específico de natureza binária.
                    São  mais de 1600 Ese /versos (informações) em cada dado(Odu) que servem de base para as orientações 
                    repassadas pelo sacerdote ou sacerdotiza  para o consulente, de acordo com o que ele precisa
                    realizar para conduzir melhor a sua vida.
                    Durante milênios, todos estes versos foram memorizados pelos sacerdotes/isas, transmitidos oralmente.
                    Somente recentemente passaram a serem escritos.</p>
                    </div>
        
                 <img src={Img4} alt="Ilustração etnica da África"/>

                 <div>
                <h2 className="title_Algoritmos"> O Sistema Binário</h2>
                <p className="text_alg"> A relação do sistema binário com Ifá se realiza através perpeção de 
                    do modo como estes sistemas se realizam: ligado e desligado; não e sim;
                    falso e verdadeiro; 0 e 1.
                    A partir deste sistema é possível realizar operações lógicas, aritméticas e representar 
                    números, símbolos e caracteres.
                    Os Odus, através dos seus símbolos gráficos utilizam-se desta mesma percepção, incluindo 
                    primordialmente os aspectos da Natureza - contração e expansão, negativo-poitivo, para configurar o seu sistema.
                    Coisa que o computador não faz!
                    Entretanto, assim como o computador, no jogo de Ifá são utilizados algoritmos - uma sequência
                    de ações finitas para resolução de um problema. 
                     Tanto no sistema binário da  computação (0 e 1) quanto o  de Ifá (1 e 2), há algoritimos 
                     a serem executados. Na execução os comandos se processo e o resultado sempre será uma 
                     saída compatível com a solicitação de entrada.
                     Ifá é baseado no padrão de 8 bits:cadeia de 8 padrões, que gera 16 Odus principais(mãe/pai) e, nas suas 
                     combinações 256 Odus filhas/os.

                   </p>
              </div>
             
            </div>
             
        </>
    )
}

export default Ifa 

