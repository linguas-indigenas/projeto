import "../Linguagens/linguagens.css"
import logo from "../../assets/logo_projeto_completo.svg"; 
const sobre = () => {

    return (

        <div className="linguagens"> 

         <section className="div_scroll"> 

             <div className="section-clara-relativa" >
            
                 <div > 
            
                     <img className="imagem_contextual"  src={logo}  />
            
                  </div>
                    
   
             </div>

             <div className="blocosTexto"> 
     
           <section  className="section-escura-relativa"  > 
           <div className="blocos_texto"> 
                    <h2 className="titulo_sessao_escura">Sobre</h2>
                        
                            <p className="bloco_texto"  >
                              Para cumprir com os objetivos de identificar, documentar, reconhecer e valorizar as 
                              línguas faladas no Brasil, foi instituído o “Inventário Nacional da Diversidade Linguística” 
                              (INDL), por meio do Decreto nº 7.387, de 9 de dezembro de 2010, e a elaboração do “Guia de pesquisa 
                              e documentação para o INDL” pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN, 2016).
                               Infelizmente, o IPHAN e o Ministério da Cultura reconheceram apenas 7 línguas como Referência Cultural 
                               Brasileira, das quais 6 são indígenas: Assurini do Trocará, Guarani M’bya, Nakuhuá, Matipu, Kuikuro e Kalapalo.
                                As demais línguas indígenas brasileiras ainda não são reconhecidas oficialmente.

                            </p>
                           
                            <p className="bloco_texto"  >
                              Para Martins e Chamorro (2015) há 11 línguas faladas em Mato Grosso do Sul, 
                              são elas: Guaraní, Kaiowá, Ofaié, Guató, Boróro, Teréna, Kinikináu, Chamacóco, Kadiwéu e Português.

                            </p>

                            <p className="bloco_texto"  >
                               Neste ano de 2022 inicia-se a Década Internacional das Línguas Indígenas - DILI (2022-2032), instituída na 
                               Assembleia Geral das Nações Unidas em resposta às demandas de ação efetiva e contínua em prol do reconhecimento, 
                               da valorização e manutenção das línguas indígenas, apresentadas em 2019 como o “Ano Internacional das línguas indígenas”. LINK

                            </p>

                            <p className="bloco_texto"  >
                             No México, foi elaborada La Declaración de Los Pinos (2020) que institui os fundamentos para a elaboração do Plano de Ação Global 
                             para a DILI, estabelecendo como princípio norteador a participação efetiva dos povos indígenas, tendo como lema “Nada para nós sem nós”. 
                             Em Paris, no mesmo ano, foi lançado o Grupo de Trabalho Mundial da DILI, no qual a brasileira Altaci Kokama tem nos representado.

                            </p>

                            <p className="bloco_texto"  >
                             Descrever o Atlas da UNESCO…


                            </p>
                       
                     </div>
                 </section>

                 </div>

          </section>
        </div>
    )
}

export default sobre;