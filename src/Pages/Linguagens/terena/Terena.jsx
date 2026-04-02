import { useEffect, useRef, useState } from "react";
import "../linguagens.css";
import terena1 from "../../../assets/arquivos_linguas/terena1.svg";
import terena2 from "../../../assets/arquivos_linguas/terena2.svg";
import terena3 from "../../../assets/arquivos_linguas/terena3.svg";
import terena4 from "../../../assets/arquivos_linguas/terena4.svg";
import terena5 from "../../../assets/arquivos_linguas/terena5.svg";
import imagem_ms from "../../../assets/mapa_ms.svg";
import lingua_img1 from "../../../assets/linguas_img1.svg";
import lingua_img2 from "../../../assets/linguas_img2.svg";
import lingua_img3 from "../../../assets/linguas_img3.svg";
import lingua_img4 from "../../../assets/linguas_img4.svg";
import lingua_img5 from "../../../assets/linguas_img5.svg";
import desenho_indigena from "../../../assets/desenhos_indigenas.svg";
import quadro_pedro_americo from "../../../assets/arquivos_linguas/americo_avai.jpg";
import img_terena from "../../../assets/arquivos_linguas/danca.jpg";
import mapa_comunidade from "../../../assets/arquivos_linguas/comunidades_terena.svg";
import familiaAruak from "../../../assets/arquivos_linguas/aruak.png";
import img_arco from "../../../assets/arquivos_linguas/terenaconteudo1.svg";
import img_falantes from "../../../assets/arquivos_linguas/terenaconteudo2.svg";
import dancaTerena from "../../../assets/arquivos_linguas/terenaconteudo3.svg";
import dancaTerenaMS from "../../../assets/arquivos_linguas/terenaconteudo4.svg";
import dancaTerena5 from "../../../assets/arquivos_linguas/terenaconteudo5.svg";
import plantacaoMilho from "../../../assets/arquivos_linguas/plantacaoMilho.svg";
import pepitasOuro from "../../../assets/arquivos_linguas/pepitasOuro.svg";
import flechaIndigena from "../../../assets/arquivos_linguas/flechaIndigena.svg";
import mosquetao from "../../../assets/arquivos_linguas/mosquetao.svg";
import livro from "../../../assets/arquivos_linguas/livro.svg";
import demarcado from "../../../assets/arquivos_linguas/demarcado.svg";
import iconemensagens from "../../../assets/arquivos_linguas/messages.svg";
import iconegov from "../../../assets/arquivos_linguas/gov.svg";
import iconedocumentos from "../../../assets/arquivos_linguas/documentos.svg";
import iconemaos from "../../../assets/arquivos_linguas/maos.svg";
import marcosterena from "../../../assets/arquivos_linguas/marcosterena.svg";
import ordina from "../../../assets/arquivos_linguas/ordina.svg";
import januariogarcia from "../../../assets/arquivos_linguas/januariogarcia.svg";


import { FaPlay, FaPause } from "react-icons/fa";

/** Hook: progresso do scroll (0..1) dentro de uma seção */
function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const calc = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const inside = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const p = total > 0 ? inside / total : 0;
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };

    const onResize = onScroll;

    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress };
}

const Terena = () => {
  const imagensOfaie = [terena1, terena2, terena3, terena4, terena5];


  // Seu carrossel superior: mantido
  const [isPlaying, setIsPlaying] = useState(false);
  const icon = isPlaying ? <FaPause/> : <FaPlay/>;

  const [idx, setIdx] = useState(0);


  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % imagensOfaie.length);
    }, 5000);
    return () => clearInterval(id);
  }, [imagensOfaie.length]);

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);

const scroll = (ref, direction) => {
    if (ref.current) {
        const scrollAmount = 400; // Quantidade de pixels que avança por clique
        if (direction === 'left') {
            ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
};



   




  // Empilhado de opacidades para as 3 imagens de língua
  const linguaImgs = [lingua_img1, lingua_img2, lingua_img3, lingua_img4, lingua_img5]; // topo -> fundo
  const { ref: stackRef, progress } = useScrollProgress();
  const n = linguaImgs.length;
  const seg = 1 / n;

  // opacidade de cada camada k (0=topo): 1→0 no segmento dela
  const opacities = linguaImgs.map((_, k) => {
    const start = k * seg;
    const end = (k + 1) * seg;
    if (progress <= start) return 1;
    if (progress >= end) return 0;
    const t = (progress - start) / (end - start);
    return 1 - t; // 1→0
  });

  return (
    
      <div className="linguagens">

    
        <div className="apresentacao_ofaie">

          <div className="img_logo_ofaie">
            <img className="imagem_ofaie" src={imagensOfaie[idx]} alt="" />
          </div>
          <div className="texto_linguagem"> <h1 className="titulo_linguagem" >Língua Terena</h1> </div>

        </div>



       
         <section  className="section-escura-relativa"  > 


            <div className="blocos_texto"> 
                <div className="texto_com_imagem" >
                    <p className="bloco_texto"  >
                        A língua Terena, pertencente à família linguística Aruak, 
                        é um dos elementos centrais da identidade do povo Terena. 
                        Falada majoritariamente no estado de Mato Grosso do Sul, 
                        especialmente nas Terras Indígenas Cachoeirinha, Taunay-Ipegue, 
                        Buriti e outras, também possui falantes no estado de São Paulo, 
                        nas Terras Indígenas Araribá, Icatu e Vanuíre. A língua, que apresenta 
                        estrutura aglutinante e uma gramática própria, enfrenta desafios de preservação, 
                        mas continua sendo um símbolo de resistência e identidade cultural. 
                    </p>
                    <img className="imagem_conteudo" alt="" src={mapa_comunidade} />
                </div>
             </div>
         </section>



        <section  className="section-escura-relativa" > 
            <div className="div-titulo" > 
            <h2 className="titulo_sessao_escura">História</h2>
            </div>
            
            <div className="sessoes_leitura_horizontal" ref={scrollRef1} >
           

                    <div className='bloco-leitura-vertical' >
                        <div className="divMiniatura" > <img className='imgMiniatura' src={plantacaoMilho} /> </div>
                        <div className='' > 
                            <p className="bloco-texto-vertical" > 
                             O povo Terena é originário do Chaco, na região entre 
                             Paraguai e Argentina, e migrou para o atual território brasileiro no século XVIII. Durante 
                             esse período, os Terena tiveram contato com outras etnias e com os colonizadores europeus, 
                             o que resultou em transformações culturais e econômicas. A chegada dos missionários e das 
                             frentes de expansão agropecuária introduziu novas práticas agrícolas e de organização social.
                            </p>
                        </div> 
                     </div>
                     
                     <div className='bloco-leitura-vertical' >
                         <div className="divMiniatura" > <img className='imgMiniatura' src={pepitasOuro} /> </div>
                        <div className='' >  
                            <p className="bloco-texto-vertical" >
                            O contato dos Terena com os portugueses e espanhóis ocorreu no século XVI, quando
                            exploradores passaram pelo Chaco em busca de ouro no Peru e na Bolívia. O rio
                            Paraguai tornou-se um dos principais caminhos para a exploração mineral, e os Terena
                            testemunharam a construção de vilas e o surgimento da agricultura trazida pelos
                            europeus, o que impactou seu modo de vida.
                            </p>
                        </div> 
                    </div>

                     <div className='bloco-leitura-vertical' >
                        <div className="divMiniatura" > <img className='imgMiniatura' src={flechaIndigena} /> </div>
                        <div className='' >  
                            <p className="bloco-texto-vertical" >
                             No século XVIII, os Terena enfrentaram
                            disputas territoriais com outros povos indígenas, como os Guaykurú, mas conseguiram
                            estabelecer convivência pacífica devido ao seu conhecimento agrícola.
                            </p>
                        </div> 
                    </div>

                    <div className='bloco-leitura-vertical' >
                       <div className="divMiniatura" > <img className='imgMiniatura' src={mosquetao} /> </div>
                         <div className='' >  
                            <p className="bloco-texto-vertical" >
                            A Guerra do Paraguai (1864-1870) foi um evento marcante para os Terena, pois muitas
                            aldeias foram destruídas, causando a dispersão da população. Já no século XX, a
                            construção da Estrada de Ferro Noroeste do Brasil (1905-1914) trouxe impactos
                            econômicos e sociais, pois muitos indígenas foram empregados na expansão ferroviária,
                            promovendo mudanças no estilo de vida e nos territórios ocupados.
                            </p>
                         </div> 
                    </div>


                    <div className='bloco-leitura-vertical' >
                        <div className="divMiniatura" > <img className='imgMiniatura' src={livro} /> </div>
                        <div className='' >  
                            <p className="bloco-texto-vertical" >
                            Além disso, a partir de 1912, missionários protestantes passaram a atuar na Aldeia
                            Bananal, em Mato Grosso do Sul, promovendo educação formal e catequese. Essa
                            presença missionária gerou disputas com missionários católicos e influenciou a
                            sociedade Terena, inclusive no interesse acadêmico por sua língua. 
                            </p>
                        </div> 
                    </div>

                    <div className='bloco-leitura-vertical' >
                        <div className="divMiniatura" > <img className='imgMiniatura' src={demarcado} /> </div>
                        <div className='' >  
                            <p className="bloco-texto-vertical" >
                             As demarcações de
                            terras começaram a ser reconhecidas oficialmente no século XX, mas até hoje há
                            disputas territoriais e reivindicações por mais áreas de ocupação tradicional.
                            </p>
                        </div> 
                    </div>
               

                

            </div>

            <div className="controles-scroll">
                      <button onClick={() => scroll( scrollRef1, 'left')}>❮ Anterior</button>
                      <button onClick={() => scroll( scrollRef1, 'right')}>Próximo ❯</button>
               </div>

        </section>



        <section className="section-clara-relativa"> 
            
            
            <div className="blocos_texto"> 
                <h2 className="titulo-sessao" >Classificação Linguística</h2>
                <div className="texto_com_imagem" > 
                    <p className="bloco_texto" >
                        A língua Terena pertence à família linguística Aruak (ou Arawak), que é considerada
                        uma das maiores da América do Sul, abrangendo cerca de quarenta línguas ainda
                        faladas. A família Aruak está presente em oito países: Bolívia, Guiana, Guiana
                        Francesa, Suriname, Venezuela, Colômbia, Peru e Brasil. No Brasil, essa família
                        compreende 17 línguas, entre elas o Apurinã, Baniwa, Paresí, Wapixana e Kinikinau
                        (OLIVEIRA, 2021).
                        <br/>  <br/>
                        Ao lado, um quadro com a classificação das principais línguas da família Aruak e a
                        posição do Terena dentro dela:
                    </p>

                    <img className="imagem_conteudo" src={familiaAruak} />
                    
                  
                </div>
            </div>
        </section>

        
         <section className="div_scroll">

            
           <div className="infos_textuais1">

            <div className="div_imagem" > 

            
                 <img className="imagem_contextual"  src={img_falantes}  />

            </div>
        
             
            </div>

            <div className="blocosTexto">

          <section  className="infos_textuais1"> 

         
            <div className="blocos_texto"> 
                 <h2 className="titulo_sessao_escura" >Falantes</h2>
                <div className="texto_com_imagem" > 
                    <p className="bloco_texto" >
                        A população falante da língua Terena está estimada em cerca de 26 mil indivíduos,
                        conforme estudos recentes. No entanto, nem todos esses indivíduos são falantes nativos
                        da língua, pois o contato intenso com o português tem levado à diminuição de seu uso
                        em algumas comunidades. Em localidades como Miranda-MS e Aquidauana-MS, a
                        língua ainda é falada amplamente, enquanto em outras, como Nioaque e Dois Irmãos do
                        Buriti, seu uso tem sido reduzido drasticamente (OLIVEIRA, 2021).
                    </p>
                </div>
            </div>

        </section>
        
        <section  className="infos_textuais1"> 
           
            <div className="blocos_texto"> 
                <div className="texto_com_imagem" > 
                    <p className="bloco_texto" >
                        A língua Terena apresenta variações regionais, reflexo das diferentes realidades
                        socioculturais em que os falantes estão inseridos. Os mais jovens, principalmente
                        aqueles que vivem em áreas urbanas, tendem a falar mais português do que Terena,
                        enquanto os mais velhos preservam melhor o idioma tradicional.
                    </p>
                </div>
           </div>

        </section>

        <section  className="infos_textuais1"> 
            <div className="blocos_texto"> 
                <div className="texto_com_imagem" > 
                    <p className="bloco_texto" style={{color: "white"}}>
                        O Censo de 2022 ainda não disponibilizou os dados por etnia, impossibilitando uma
                        atualização oficial sobre o número de falantes da língua Terena. Além disso, por meio
                        de pesquisas, não há dados precisos sobre a quantidade de falantes nativos da língua
                        atualmente (IBGE, 2022).
                    </p>
                </div>
            </div>
         </section>
         </div>
      </section>
      


        <section className="div_scroll">

            
           <div className="infos_textuais1">

            <div className="div_imagem" > 

            
                 <img className="imagem_contextual"  src={dancaTerena5}  />

            </div>
        
             
            </div>

            <div className="blocosTexto">

         <section  className="infos_textuais2" > 
           
            <div className="blocos_texto"> 
                 <h2 className="titulo-sessao" >Distribuição Geográfica</h2>
                <div className="texto_com_imagem" > 
                    <p className="bloco_texto">
                        Os falantes da língua Terena estão distribuídos majoritariamente na região Centro-Oeste
                        do Brasil, principalmente nos estados de Mato Grosso do Sul, Mato Grosso e São Paulo.
                        No Mato Grosso do Sul, a maior concentração encontra-se nos municípios de Miranda,
                        Aquidauana, Anastácio, Nioaque, Sidrolândia, Dois Irmãos do Buriti e Campo Grande.
                        Há também presença significativa na reserva dos Kadiwéu (Porto Murtinho) e entre os
                        Guarani-Kaiowá (Dourados) (OLIVEIRA, 2021).
                    </p>
                </div>
            </div>

        </section>

        <section  className="infos_textuais2" > 
            <div className="blocos_texto"> 
                <div className="texto_com_imagem" > 
                    <p className="bloco_texto">
                        No estado do Mato Grosso, há falantes na região de Alta Floresta, resultado de
                        migrações mais recentes. Já no estado de São Paulo, há uma presença menor,
                        principalmente na reserva Aribá, na região de Bauru, onde convivem com os Kaingang.
                    </p>
                </div>
             </div>
        </section>

 <section  className="infos_textuais2" > 
           
            <div className="blocos_texto"> 

                 <p className="bloco_texto" >
                    Atualmente, os Terena vivem em várias comunidades e
                    reservas indígenas. As principais comunidades estão 
                    localizadas nos municípios de:
                </p>

                
                    <ul className="bloco_texto" >
                        <li> <b> Mato Grosso do Sul:</b> Campo Grande, Nioaque, Dois Irmãos do Buriti,
                            Sidrolândia, Anastácio, Aquidauana e Miranda (OLIVEIRA, 2021).</li>
                        <li><b>Mato Grosso: </b> Alta Floresta.</li>
                        <li><b>São Paulo: </b> Bauru (reserva Aribá).</li>
                    </ul>
                 
         </div>
</section>


 <section  className="infos_textuais2" > 
           
           
            <div className="blocos_texto_alinhados"> 
                <p className="bloco_texto" >
                     Segundo o Censo do IBGE de 2010, o povo Terena contava
                     com aproximadamente <b>28.845 indivíduos</b> , sendo a quinta maior população
                     indígena do Brasil. Entre esses, cerca de 9,6 mil vivem fora de terras
                     indígenas, distribuídos em áreas urbanas (IBGE, 2010).
                </p>
               
            </div>
</section>

 </div>
</section>

 <section  className="infos_textuais1"> 

           <div className="blocos_texto">
                <h2 className="titulo_sessao_escura" >Situação Sociolinguística</h2> 

                <div className="texto_com_imagem" > 
                    <p className="bloco_texto" style={{color: "white"}} >
                        A língua Terena é falada amplamente em algumas
                        comunidades, mas seu uso tem diminuído devido à influência crescente do português.
                        Menos da metade da população Terena se declara falante ativo da língua, o que a coloca
                        em risco de extinção. Há iniciativas para a revitalização do idioma, incluindo materiais
                        didáticos bilíngues e ensino da língua em algumas escolas indígenas (OLIVEIRA,2021).
                    </p>
                </div>
         </div>

</section>


<section  className="infos_textuais1"> 

    <div className="blocos_texto" >
        <h2 className="titulo_sessao_escura" >Fonologia</h2>
        </div>

    <div className="tabelas">
           
         <table>
             <caption>Quadro 5 – Fones consonantais por Bendor-Samuel (1960)</caption>
        <thead>
            <tr>
                <th></th>
          <th>Bilabial</th>
                <th>Labiodental</th>
                <th>Alveolar</th>
                <th>Pós-alveolar</th>
                <th>Palatal</th>
                <th>Velar</th>
                <th>Glotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-header">Oclusiva</td>
                <td>[p]</td>
                <td></td>
                <td>[t]</td>
                <td></td>
                <td></td>
                <td>[k]</td>
                <td>[ʔ]</td>
            </tr>
            <tr>
                <td class="row-header">Fricativa</td>
                <td></td>
                <td></td>
                <td>[s]</td>
                <td>[ʃ]</td>
                <td></td>
                <td></td>
                <td>[h] [hy]</td>
            </tr>
            <tr>
                <td class="row-header">Nasal</td>
                <td>[m]</td>
                <td></td>
                <td>[n]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Lateral</td>
                <td></td>
                <td></td>
                <td>[l]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Tepe</td>
                <td></td>
                <td></td>
                <td>[ɾ]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Aproximante</td>
                <td>[w]</td>
                <td></td>
                <td></td>
                <td></td>
                <td>[j]</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <p class="source">Fonte: Bendor-Samuel (1960).</p>
    </table>
    </div>
</section>



<section  className="infos_textuais1" > 
           
        <div className="tabelas">
        <table>
        <caption>Quadro 6 – Vogais em Terena por Bendor-Samuel (1960) e Eastlack (1968)</caption>
        <thead>
            <tr>
                <th></th>
                <th>Anterior</th>
                <th>Central</th>
                <th>Posterior</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-header">Fechado</td>
                <td>[i]</td>
                <td></td>
                <td>[u]</td>
            </tr>
            <tr>
                <td class="row-header">Meio fechado</td>
                <td>[e]</td>
                <td></td>
                <td>[o]</td>
            </tr>
            <tr>
                <td class="row-header">Aberto</td>
                <td></td>
                <td>[a]</td>
                <td></td>
            </tr>
        </tbody>
        <p class="source">Fonte: Bendor-Samuel (1960) e Eastlack (1968).</p>
    </table>
    </div>
    
</section>


<section  className="infos_textuais1" > 
    <div className="tabelas">
   <table>
        <caption>Quadro 7 – Fones consonantais por Eastlack (1968)</caption>
        <thead>
            <tr>
                <th></th>
                <th>Bilabial</th>
                <th>Labiodental</th>
                <th>Alveolar</th>
                <th>Pós-alveolar</th>
                <th>Palatal</th>
                <th>Velar</th>
                <th>Glotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-header">oclusiva</td>
                <td>[p] [b]</td>
                <td></td>
                <td>[t] [d]</td>
                <td></td>
                <td></td>
                <td>[k] [g]</td>
                <td>[ʔ]</td>
            </tr>
            <tr>
                <td class="row-header">Fricativa</td>
                <td></td>
                <td>[v]</td>
                <td>[s] [z]</td>
                <td>[ʃ] [ʒ]</td>
                <td></td>
                <td></td>
                <td>[h] [hh]</td>
            </tr>
            <tr>
                <td class="row-header">Nasal</td>
                <td>[m]</td>
                <td></td>
                <td>[n]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Lateral</td>
                <td></td>
                <td></td>
                <td>[l]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Tepe</td>
                <td></td>
                <td></td>
                <td>[ɾ]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Aproximante</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>[j]</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
         <p class="source">Fonte: Eastlack (1968).</p>
    </table>
   </div>
</section>

<section  className="infos_textuais1" > 
 
    <div className="tabelas">
    <table class="tabela-linguistica">
        <caption>Quadro 9 – Fones vocálicos por Silva (2009)</caption>
        <thead>
            <tr>
                <th rowspan="2"></th>
                <th colspan="2">Anterior</th>
                <th colspan="2">Central</th>
                <th colspan="2">Posterior</th>
            </tr>
            <tr>
                <th>Arredondado</th>
                <th>Não arredondado</th>
                <th>Arredondado</th>
                <th>Não arredondado</th>
                <th>Arredondado</th>
                <th>Não arredondado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-header">Fechado</td>
                <td></td>
                <td>[i] [i:] [ĩ]</td>
                <td></td>
                <td>[ɨ]</td>
                <td>[u] [u:] [ũ]</td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Meio fechado</td>
                <td></td>
                <td>[e] [ẽ]</td>
                <td></td>
                <td></td>
                <td>[o] [õ]</td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Meio aberto</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>[ɔ] [ɔ:]</td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Aberto</td>
                <td></td>
                <td></td>
                <td></td>
                <td>[a] [a:] [ã]</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <p class="source">Fonte: Silva (2009).</p>
    </table>
     </div>
   
</section>


<section  className="infos_textuais1"> 
 
   <div className="tabelas">
   <table class="tabela-linguistica">
        <caption>Quadro 10 – Fones consonantais a partir de Martins (2009)</caption>
        <thead>
            <tr>
                <th></th>
                <th>Bilabial</th>
                <th>Labiodental</th>
                <th>Alveolar</th>
                <th>Pós-alveolar</th>
                <th>Palatal</th>
                <th>Velar</th>
                <th>Glotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="row-header">Oclusiva</td>
                <td>[p]</td>
                <td></td>
                <td>[t]</td>
                <td></td>
                <td></td>
                <td>[k]</td>
                <td>[ʔ]</td>
            </tr>
            <tr>
                <td class="row-header">Fricativa</td>
                <td></td>
                <td>[v]</td>
                <td>[s]</td>
                <td></td>
                <td>[ʃ]</td>
                <td></td>
                <td>[h]</td>
            </tr>
            <tr>
                <td class="row-header">Africada</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>[tʃ]</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Nasal</td>
                <td>[m]</td>
                <td></td>
                <td>[n]</td>
                <td></td>
                <td>[ɲ]</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Pré-nasal</td>
                <td>[ᵐb]</td>
                <td></td>
                <td>[ⁿd] [ⁿz]</td>
                <td></td>
                <td>[ⁿʒ]</td>
                <td>[ⁿɡ]</td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Lateral</td>
                <td></td>
                <td></td>
                <td>[l]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Tepe</td>
                <td></td>
                <td></td>
                <td>[ɾ]</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="row-header">Aproximante</td>
                <td>[w]</td>
                <td></td>
                <td></td>
                <td></td>
                <td>[j]</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
         <p class="source">Fonte: Martins (2009).</p>
    </table>
    </div>
</section>


    <section className="div_scroll" >  



    <div> 
    <section  className="infos_textuais2" >  
        
        <div className="blocos_texto"> 
            <h2 className="titulo-sessao" >Aspectos fonético-fonológicos da língua Terena (Arawak)</h2>
           
                <p className="bloco_texto">
                    A descrição fonético-fonológica da língua Terena, pertencente à família Arawak, tem sido
                    abordada por diferentes autores, entre eles Bendor-Samuel (1960, 1962), Eastlack (1968), Silva
                    (2009) e Martins (2009), cujas propostas são sistematizadas por Oliveira (2021). Os quadros
                    fonéticos e fonológicos apresentados na seção 3 da referida tese (OLIVEIRA, 2021, p. 36–39)
                    evidenciam variações analíticas quanto ao inventário segmental da língua, decorrentes de
                    diferentes recortes metodológicos e dialetais.
                 </p>
                 
                
           
        </div>
    </section>


    <section  className="infos_textuais2" >  
        <div className="blocos_texto"> 
            
                <p className="bloco_texto">
                    De modo geral, o sistema vocálico do Terena é composto por cinco vogais orais /a, e, i, o, u/,
                    não sendo reconhecida, nas análises clássicas, a existência de vogais nasalizadas fonêmicas. A
                    nasalização vocálica ocorre como resultado de processos fonológicos condicionados,
                    especialmente de natureza morfológica, manifestando-se em contextos específicos da palavra
                    (por exemplo, a vogal /a/ pode realizar-se como [ã] em ambientes nasalizados).
                 </p>
                 
                 
           
        </div>
    </section>

    <section  className="infos_textuais2" >  
        <div className="blocos_texto"> 
           
                <p className="bloco_texto">
                    O sistema consonantal inclui oclusivas (/p, t, k/), nasais (/m, n/), fricativas (/s, h/),
                    aproximantes (/w, j/), lateral (/l/) e tepe (/ɾ/), destacando-se a ocorrência de consoantes
                    pré-nasalizadas, como [mb] e [nd], frequentemente associadas a contextos de nasalização.
                 </p>
                 
               
             </div>
        
    </section>


    <section  className="infos_textuais2" >  
         <div className="blocos_texto"> 
               
                    <p className="bloco_texto">
                         A estrutura silábica do Terena apresenta preferência por padrões simples, sobretudo CV (como
                         pa, ka), além de V (a, o) e, de forma mais restrita, CVC (kan), com clara evitação de encontros
                         consonantais complexos. O acento é previsível e não contrastivo, incidindo, em geral, sobre a
                         última sílaba da palavra fonológica (por exemplo, ka.na.pá), conforme descrições de
                         Bendor-Samuel (1962) retomadas por Oliveira (2021).
                    </p>
                
                    
               
            </div>
    </section>

    <section  className="infos_textuais2">  

            <div className="blocos_texto" > 
                <p className="bloco_texto">
                    Entre os fenômenos fonológicos, a nasalização assume papel central no sistema da língua.
                    Trata-se de um processo associado à marcação da primeira pessoa do singular, em que o traço
                    [+nasal] se comporta como elemento flutuante, espraiando-se pelos segmentos sonoros da
                    palavra. 
                </p>
            </div>
        
    </section>

    <section  className="infos_textuais2">

        
            <div className="blocos_texto" > 
                <p className="bloco_texto">
                    Assim, a nasalidade pode abranger vogais e consoantes sonoras sucessivas (resultando
                    em sequências como [ã], [ẽ] ou consoantes pré-nasalizadas), sendo interrompida por
                    consoantes obstruintes, que atuam como bloqueadoras do espraiamento nasal. Oliveira (2021)
                    discute esse fenômeno à luz da fonologia não linear, articulando dados segmentais e análises
                    acústicas que evidenciam a natureza sistemática da nasalização no Terena.
                </p>
            </div>
       


    </section>

    </div>

            <div className="infos_textuais2">
                 <div className="div_imagem" > 
                     <img className="imagem_contextual" src={dancaTerena} />
                 </div>
            </div>

</section>

    <section  className="section-escura-relativa">  
        <div className="blocos_texto" >
        <h2 className="titulo_sessao_escura" >Morfologia</h2>
        </div>

        <div className="tabelas" >
       
        <table class="tabela-morfologia">
          
        <caption>Quadro 26 – Morfemas aspectuais em Terena</caption>
        <thead>
            <tr>
                <th></th>
                <th>semântica</th>
                <th>forma</th>
                <th>glosa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="7" class="categoria">Durativo</td>
                <td>costumeiro</td>
                <td>-kena</td>
                <td>habitual</td>
            </tr>
            <tr>
                <td>costumeiro</td>
                <td>-xu</td>
                <td>habitual</td>
            </tr>
            <tr>
                <td>ação contínua</td>
                <td>-ti</td>
                <td>durativo não passado</td>
            </tr>
            <tr>
                <td>durativo (descritivo)</td>
                <td>-ix</td>
                <td>durativo/repetitivo</td>
            </tr>
            <tr>
                <td>durativo (verbo intransitivo e transitivo)</td>
                <td>-heixo</td>
                <td>durativo/repetitivo</td>
            </tr>
            <tr>
                <td>outra vez</td>
                <td>-po (~ -p)</td>
                <td>reiterativo</td>
            </tr>
            <tr>
                <td>ação desde o começo</td>
                <td>-neekene</td>
                <td>incoativo</td>
            </tr>
            <tr>
                <td rowspan="2" class="categoria">Completivo</td>
                <td>ação já realizada</td>
                <td>-ne</td>
                <td>concluso/completivo</td>
            </tr>
            <tr>
                <td>ação já realizada recente</td>
                <td>-meku</td>
                <td>concluso/completivo</td>
            </tr>
            <tr>
                <td rowspan="2" class="categoria">Incompletivo</td>
                <td>ação não concluída</td>
                <td>-ni'i (~ -ni)</td>
                <td>incompletivo</td>
            </tr>
            <tr>
                <td>ação inconclusa (estar por fazer, mas ainda não o fez)</td>
                <td>-iko (~ -Vvo)</td>
                <td>inconcluso</td>
            </tr>
        </tbody>
        <p class="source">Fonte: Dados da pesquisa.</p>
    </table>
    </div>
    
</section>


 <section  className="infos_textuais1">  

    <div className="tabelas" > 
     
       
        <table class="tabela-linguistica">
        <caption>Quadro 27 – Morfemas de evidencialidade em Terena</caption>
        <thead>
            <tr>
                <th>Morfema</th>
                <th>Evidencialidade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>-hi</td>
                <td>Reportativo</td>
            </tr>
            <tr>
                <td>-pepo</td>
                <td>Inferência visual</td>
            </tr>
            <tr>
                <td>-ino</td>
                <td>Pressuposto</td>
            </tr>
        </tbody>
         <p class="source">Fonte: Dados da pesquisa.</p>
    </table>
    </div>
    
</section>

<section  className="section-escura-relativa">  
     
     <div className="tabelas"> 
       
      <table class="tabela-linguistica">
        <caption>Quadro 28 – Morfemas de partes do corpo</caption>
        <thead>
            <tr>
                <th>Morfemas partes do corpo</th>
                <th>Significado</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>-heve</td><td>'pé'</td></tr>
            <tr><td>-ihi</td><td>'cauda'</td></tr>
            <tr><td>-ine</td><td>'lábio'</td></tr>
            <tr><td>-inuku</td><td>'testa'</td></tr>
            <tr><td>-ke'e</td><td>'costas'</td></tr>
            <tr><td>-keno</td><td>'ouvido'</td></tr>
            <tr><td>-kiri</td><td>'nariz'</td></tr>
            <tr><td>-koxe</td><td>'corpo, tronco'</td></tr>
            <tr><td>-kuno</td><td>'quadril, coxa'</td></tr>
            <tr><td>-mujo</td><td>'garganta'</td></tr>
            <tr><td>-naka</td><td>'nuca'</td></tr>
            <tr><td>-nene</td><td>'língua'</td></tr>
            <tr><td>-no'e</td><td>'cintura'</td></tr>
            <tr><td>-noke</td><td>'garganta'</td></tr>
            <tr><td>-none</td><td>'rosto'</td></tr>
            <tr><td>-ope</td><td>-osso</td></tr>
            <tr><td>-paho</td><td>'boca'</td></tr>
            <tr><td>-pu'i</td><td>-cabeça</td></tr>
            <tr><td>-puhu</td><td>'joelho'</td></tr>
            <tr><td>-sene</td><td>'urina (talvez ' bexiga ')</td></tr>
            <tr><td>-tere</td><td>'nádegas'</td></tr>
            <tr><td>-toko</td><td>'nuca'</td></tr>
            <tr><td>-uke</td><td>'olhos'</td></tr>
            <tr><td>-vo'u</td><td>'mãos'</td></tr>
            <tr><td>-xa'a</td><td>'peito'</td></tr>
        </tbody>
         <p class="source">Fonte: Marcus (1994, p. 914) e adaptação de nossos dados.</p>
    </table>
    </div>
   
    
</section>

<section  className="section-escura-relativa">  

    <div className="tabelas" > 
     
       
     <table class="tabela-linguistica">
        <caption>Quadro 29 – Classificadores em Terena</caption>
        <thead>
            <tr>
                <th>Classificador</th>
                <th>Significado</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>‘o (~ -’a)</td><td>ser vivo</td></tr>
            <tr><td>-’i (~ ‘e)</td><td>algo não específico</td></tr>
            <tr><td>-he</td><td>comprido, fio</td></tr>
            <tr><td>-ikene</td><td>vazio</td></tr>
            <tr><td>-ik</td><td>alongado/cumprido+rídigo</td></tr>
            <tr><td>-koxe</td><td>cilíndrico</td></tr>
            <tr><td>-na</td><td>raiz</td></tr>
            <tr><td>-nene</td><td>comprido, esticado</td></tr>
            <tr><td>-no’e</td><td>líquido</td></tr>
            <tr><td>-nuku</td><td>ajuntamento</td></tr>
            <tr><td>-pa</td><td>parte de um todo</td></tr>
            <tr><td>-pe</td><td>plano</td></tr>
            <tr><td>-pi</td><td>todo/completo</td></tr>
            <tr><td>-pu’i</td><td>redondo, sobre</td></tr>
            <tr><td>-so</td><td>fio</td></tr>
            <tr><td>-tata</td><td>parte/pedaços</td></tr>
        </tbody>
         <p class="source">Fonte: Dados da pesquisa.</p>
    </table>
    </div>
</section>


<section  className="infos_textuais1">  
    <div className="tabelas" >  
     
       
      <table class="tabela-linguistica">
        <caption>Quadro 30 – Morfemas nominalizadores</caption>
        <tbody>
            <tr>
                <td>-ku</td>
                <td>‘Nominalizador locativo’</td>
            </tr>
            <tr>
                <td>-ko</td>
                <td>‘Nominalizador em verbos descritivos’</td>
            </tr>
            <tr>
                <td>-ke</td>
                <td>‘Nominalizador instrumental de verbos intransitivos’</td>
            </tr>
            <tr>
                <td>-pe</td>
                <td>‘Nominalizador instrumental de verbos transitivos’</td>
            </tr>
            <tr>
                <td>-u</td>
                <td>‘Nominalizador’</td>
            </tr>
        </tbody>
         <p class="source">Fonte: Dados da pesquisa.</p>
    </table>
   </div>
   
    
</section>


<section className="div_scroll" >


   

    <div> 

    <section  className="infos_textuais2" >

          

         <div className="blocos_texto" > 
            <h2 className="titulo-sessao" >Aspectos morfológicos da língua Terena:  morfemas, padrões e fenômenos aglutinantes</h2>

             <p className="bloco_texto">
                 A língua Terena apresenta uma morfologia característica das línguas aglutinantes, isto é,
                as palavras são formadas pela combinação de morfemas, que são as menores unidades
                 de significado. Esses morfemas podem ser raízes, que carregam o sentido principal da
                 palavra, além de prefixos, sufixos e clíticos, que acrescentam informações gramaticais.
             </p>

          </div> 
    </section>

    <section  className="infos_textuais2">  
     <div className="blocos_texto" > 
        <p className="bloco_texto">
            No Terena, os prefixos costumam indicar pessoa ou causatividade, enquanto os sufixos
            marcam funções como verbalização, aspecto ou classificação semântica. Um exemplo
            descrito na tese é ∅=ma-pú’i-k-o, em que o classificador -pú’i indica um objeto
            arredondado, o morfema -k verbaliza a base e -o marca transitividade, compondo o
            sentido de descascar algo arredondado. Outro exemplo é ka-hámi’i-k-o, no qual o
            prefixo causativo ka- expressa a ideia de “fazer brilhar”. Esses casos mostram como
            cada morfema contribui com uma parte do significado, formando palavras complexas de
            maneira organizada.
        </p>

    </div>
   </section>

    <section  className="infos_textuais2">  
    <div className="blocos_texto" > 
        <p className="bloco_texto">
            O funcionamento dessas palavras segue três padrões morfológicos principais:
            derivação, composição e justaposição. A derivação ocorre quando afixos criam novas
            palavras ou modificam seu sentido, como em éxo → éxo-ne, em que a noção de
            “conhecer” dá origem a “conhecimento”.
        </p>
    </div>
  </section>
  <section  className="infos_textuais2">  
    <div className="blocos_texto" > 
        <p className="bloco_texto">
            A composição envolve a união de bases lexicais, ampliando o significado. Já a
            justaposição muito comum no Terena consiste no encadeamento de morfemas que
            permanecem reconhecíveis dentro da palavra. Isso pode ser visto em kipo-pú’i-x-o-vo,
            estrutura em que um elemento nominal (“cabeça”) se integra ao verbo e recebe outros
            morfemas, resultando no sentido de “lavar a própria cabeça”. Esse tipo de construção
            evidencia que o significado final nasce da soma organizada de partes menores.
        </p>
    </div>
  </section>

  <section  className="infos_textuais2">  
    <div className="blocos_texto" > 
        <p className="bloco_texto">
            Entre os fenômenos morfológicos mais marcantes da língua está, em primeiro lugar, a
            própria aglutinação, que permite reunir vários morfemas numa única palavra. A tese
            apresenta a forma ning-o-pino-p-ea-ti-mea-mo-maka como exemplo de como pessoa,
            aspecto e modalidade podem ser expressos simultaneamente. 
        </p>
    </div>
  </section>   

    <section  className="infos_textuais2">  
    <div className="blocos_texto" > 
        <p className="bloco_texto">
            Outro fenômeno importante é a incorporação nominal, em que nomes muitas vezes partes do corpo
            passam a integrar o verbo, como ocorre em kipo-pú’i-x-o-vo, ampliando o conteúdo
            semântico da ação. O terceiro fenômeno é o uso de classificadores morfológicos, como
            -na em ∅=oye-na-k-o-ti xupu, que especifica o tipo de objeto envolvido (“cozinhar
            mandioca”). Esses processos mostram como a língua organiza significado dentro da
            própria estrutura da palavra.
        </p>
        
    </div>
  </section>     

  <section  className="infos_textuais2">  
    <div className="blocos_texto" > 
        <p className="bloco_texto">
            Em conjunto, esses elementos revelam que a morfologia do Terena funciona como um
            sistema altamente produtivo e coerente. A combinação de prefixos, sufixos e clíticos,
            aliada aos padrões de derivação, composição e justaposição, permite a construção de
            palavras ricas em informação. Exemplos como ka-hámi’i-k-o, éxo-ne e
            ∅=oye-na-k-o-ti demonstram que cada morfema mantém sua identidade e contribui para
            o sentido final, confirmando o caráter aglutinante da língua. Assim, o Terena mostra
            como forma e significado se articulam de maneira clara, evidenciando a complexidade e
            a expressividade de sua organização morfológica.
        </p>
    </div>
  </section>
  </div>

   <section  className="infos_textuais2" >
       <div className="div_imagem" > 
        <img className="imagem_contextual" src={dancaTerenaMS} />
        </div>
    </section>

</section>




<section className="div_scroll">

    
  <div className="infos_textuais1">
      <div className="div_imagem" > 

        <img  className="imagem_contextual" src={img_arco} />
    </div>

    </div>

    <div>
  <section  className="infos_textuais1">  

    <div className="blocos_texto" > 
        <h2 className="titulo_sessao_escura" >Sintaxe</h2>
        <p className="bloco_texto" >
            A sintaxe da língua Terena segue majoritariamente a ordem VOS
            (Verbo-Objeto-Sujeito). No entanto, pode ocorrer variação para SVO quando há a
            presença do tópico marcado por "eneponé".
        </p>

        <p className="bloco_texto">
            Exemplo de oração simples: <br/>
            - Yokove koa re-sokoro ("O homem correu") → VOS
        </p>
    </div>

  </section> 

  <section  className="infos_textuais1">  
    <div className="blocos_texto" > 
       <p className="bloco_texto">
            As sentenças podem apresentar diferentes estruturas, 
            incluindo orações interrogativas e complexas.
       </p>

       <p className="bloco_texto">
            Exemplo de oração interrogativa: <br/>
            - Ne-korevexe vye? ("Você me empresta?")
       </p>
    </div>
   </section> 

    <section  className="infos_textuais1">  
        <div className="blocos_texto" > 

            <p className="bloco_texto">
                A língua também apresenta mecanismos de subordinação, incluindo orações causais e
                relativas.
            </p>

             <p className="bloco_texto">
                Exemplo de oração relativa: <br/>
                - Ne-pihõ re-kami ("O olho que ele cortou")
            </p>
        </div>
    </section> 

    </div>

    
</section>


<section className="div_scroll">



    <div>
    <section  className="infos_textuais2">  

        
         <div className="blocos_texto"> 
             <h2 className="titulo-sessao" >Semântica e Léxico</h2>
             <p className="bloco_texto">
                O léxico da língua Terena é fortemente influenciado por sua estrutura morfológica e
                pelo contato com o português. <br/> <br/>
                A criação de palavras ocorre frequentemente por derivação e composição.
            </p>

             <p className="bloco_texto">
                Exemplo: <br/>
                - ne-wikiko ("minha casa") → ne-wikikowaso ("meu barraco") <br/>
                - yokove ("homem") + sokoro ("correr") → yokovesokoro ("corredor")
             </p>
         </div>
    </section> 



    <section  className="infos_textuais2">  
         <div className="blocos_texto"> 
            <p className="bloco_texto">
                A língua também apresenta um 
                sistema de onomatopeias:
            </p>

            <p className="bloco_texto">
                Exemplo: <br/>
                - kuhkuh ("som de passos") <br/>
                - txatxa ("barulho de algo quebrando")
            </p>
         </div>

    </section> 


    <section  className="infos_textuais2">  
         <div className="blocos_texto"> 

            <p className="bloco_texto">
                Devido ao contato com o português, 
                algumas palavras foram incorporadas ao
                vocabulário Terena, como:
            </p>

            <p className="bloco_texto">
                Exemplo: <br/>
                - purutuye ("homem branco", do português "português") <br/>
                - kavalo ("cavalo") <br/>
                - aruvê ("avião")
            </p>
         </div>
    </section> 


    </div>

      <div className="infos_textuais2">
      <div className="div_imagem" > 

        <img  className="imagem_contextual" src={dancaTerena} />
    </div>

    </div>
</section>
    
    <section  className="infos_textuais1" >  
       
         <div className="blocos_texto" > 
             <h2 className="titulo_sessao_escura" >Status e Preservação</h2>
              <p className="bloco_texto">
                A língua Terena, considerada uma língua ameaçada devido ao número reduzido de falantes e à
                transmissão desigual entre as aldeias, a UNESCO classifica o Terena como "definitivamente em
                risco" (WIKIPEDIA, 2025).
              </p>
        </div>
    </section> 


    <section  className="infos_textuais1">  
   
         <div className="blocos_texto" >
           <h2 className="titulo_sessao_escura" >Situação Atual da Língua Terena</h2> 
            <p className="bloco_texto">
                A língua é falada em várias aldeias, incluindo Água Branca, Limão Verde, Buriti, Taunay,
                Aldeinha, Buritizinho, Dourados, Kadiwéu, Lalima, Nioaque, Nossa Senhora de Fátima,
                Cachoeirinha e Pilade Rebuá em Mato Grosso do Sul; Umutina e Terena Gleba Iriti em Mato
                Grosso; e Icatu e Araribá em São Paulo. Alguns estudos indicam que, enquanto em algumas
                aldeias a língua Terena ainda é majoritária, como em Cachoeirinha, em outras, como Buriti e]
                Nioaque, seu uso diminui (WIKIPEDIA, 2025).
            </p>
        </div>

    </section> 




    <section  className="section-clara-relativa">

           <div className="blocos_texto" >
                <h2 className="titulo-sessao" >Iniciativas de Preservação e Revitalização</h2>
           </div>
      

        <div className="sessoes_leitura_horizontal" ref={scrollRef2}  >
          
            <div className='bloco-leitura-vertical-vermelho' >
                   <div className="divMiniatura" > <img className="icones" src={iconemensagens} /> </div>
                 <div className='icone_texto_card'> <p><b>Educação Bilíngue</b></p>   </div>
                 <div className='' > 
                        <p className="bloco-texto-vertical" > 

                     Muitas escolas indígenas começaram a incorporar o ensino da
                    língua Terena no currículo escolar, promovendo a alfabetização na língua materna. A
                    Escola Municipal Sulivan Silvestre Oliveira, localizada em Campo Grande, MS, por
                    exemplo, começou a oferecer aulas de Língua Terena em 2016 (OLIVEIRA, 2016).

                    </p>
                </div> 
            </div>

            <div className='bloco-leitura-vertical-vermelho' >
                 <div className="divMiniatura" > <img className="icones" src={iconemaos} /> </div>
                <div className='icone_texto_card'> <p><b>Oficialização da Língua Terena de Sinais</b></p>    </div>
                <div className='' > 
                        <p className="bloco-texto-vertical" > 
                     Em Miranda, MS, a Língua Terena de Sinais
                    foi oficialmente reconhecida, sendo a primeira língua indígena de sinais a se tornar
                    oficial no Brasil, promovendo a inclusão de indígenas surdos e reforçando a identidade
                    cultural (GOVERNO DO ESTADO DE MATO GROSSO DO SUL, 2021).
                    </p>
                </div> 
            </div>

            <div className='bloco-leitura-vertical-vermelho' >
                 <div className="divMiniatura" > <img className="icones"  src={iconegov} /> </div>
                <div className='icone_texto_card'>  <p><b>Apoio Institucional</b></p>     </div>
                 <div className='' > 
                    <p className="bloco-texto-vertical" > 
                   A Fundação Nacional do Índio (FUNAI) tem apoiado projetos de
                    valorização e revitalização das línguas indígenas, incluindo o Terena. Entre as ações de
                    apoio estão parcerias com linguistas e professores universitários para a preservação da
                    língua (FUNAI, 2019).
                    </p>
                  </div> 
            </div>

             <div className='bloco-leitura-vertical-vermelho' >
             <div className="divMiniatura" > <img className="icones" src={iconedocumentos} /> </div>
                <div className='icone_texto_card'> <p><b>Documentação e Pesquisa</b></p>      </div>
                <div className='icone_texto_card' > 
                      <p className="bloco-texto-vertical" > 
                     Pesquisas acadêmicas têm sido realizadas para documentar e
                    analisar a língua Terena, contribuindo para a preservação e revitalização. Tais estudos
                    incluem pesquisas etnográficas e sociolinguísticas sobre as línguas indígenas e as
                    formas de revitalização na comunidade Terena (SILV A, 2020).
                    </p>
                </div> 
            </div>
        </div>
         <div className="controles-scroll">
                      <button onClick={() => scroll( scrollRef2, 'left')}>❮ Anterior</button>
                     <button onClick={() => scroll(scrollRef2, 'right')}>Próximo ❯</button>
               </div>
    </section>


    <section  className="infos_textuais1">  
     
         <div className="blocos_texto" > 
             <h2 className="titulo_sessao_escura" >Importância Cultural</h2>
            <p className="bloco_texto">
                A língua Terena desempenha um papel fundamental na preservação da cultura e identidade do
                povo Terena. Embora a distinção entre a língua materna e a língua de contato (português) não
                seja sociologicamente marcada entre os Terena, o uso da língua indígena está intimamente
                ligado a uma socialidade afetiva, contribuindo para a coesão comunitária e a transmissão de
                saberes tradicionais (INSTITUTO SOCIOAMBIENTAL, 2025).
            </p>
        </div>
    </section> 


    <section  className="section-clara-relativa" >  

        
      
         
         
              

             <div className="blocos_texto" >
                <div className="div-titulo" > 
               <h2 className="titulo-sessao" >Manifestações culturais e artísticas</h2>
             </div>
            <p className="bloco_texto">
                As expressões culturais dos Terena estão fortemente conectadas à sua língua. Entre as
                manifestações mais relevantes estão:
            </p>
             </div>

         <div className="sessoes_leitura_horizontal" ref={scrollRef3} > 
    

    <div  className="bloco-leitura-vertical-bg">  
         <img src={terena3} alt="Background" className="img-background-absoluta" />
          <div className="conteudo-sobre-imagem"> 
      <h2 className="titulo_sessao_escura" >Dança</h2>
         <div className=""> 
           <p className="bloco-texto-vertical">
                A dança é uma das principais expressões da cultura Terena, utilizada para narrar
                histórias, transmitir conhecimentos e reforçar a identidade do povo. Além disso, tem
                sido um instrumento importante na difusão da luta indígena e na valorização da
                memória coletiva (MUSEU ÍNDIA V ANUÍRE, 2024).
            </p>
          
        </div>
        </div>
    </div> 

    <div  className="bloco-leitura-vertical-bg">  
         <img src={terena4} alt="Background" className="img-background-absoluta" />
         <div className="conteudo-sobre-imagem"> 
      <h2 className="titulo_sessao_escura" >Cerâmica</h2>
         <div className=""> 
                <p className="bloco-texto-vertical">
                A cerâmica tradicional é uma prática mantida há gerações, especialmente
                entre as mulheres Terena. As peças produzidas carregam significados culturais e são
                utilizadas em rituais e no cotidiano, sendo fundamentais para a preservação da
                identidade do povo (MUSEU ÍNDIA V ANUÍRE, 2023).
                </p>
            
        </div>
        </div>
    </div> 

    <div  className="bloco-leitura-vertical-bg">  
         <img src={terena1} alt="Background" className="img-background-absoluta" />
          <div className="conteudo-sobre-imagem"> 
      <h2 className="titulo_sessao_escura" >Língua como marca identitária</h2>
         <div className=""> 
                <p className="bloco-texto-vertical">
                A língua Terena é considerada o principal marcador
                cultural e identitário do povo. Seu uso, seja na oralidade ou na escrita, fortalece os laços
                comunitários e reforça a memória coletiva (SILVA, 2020).
                 </p>
        </div>
        </div>
    </div> 

    </div>
    <div className="controles-scroll">
                      <button onClick={() => scroll( scrollRef3, 'left')}>❮ Anterior</button>
                      <button onClick={() => scroll( scrollRef3, 'right')}>Próximo ❯</button>
               </div>
   </section> 

    <section  className="infos_textuais2">  
     
         <div className="blocos_texto"> 
            <p className="bloco_texto">
                A revitalização da língua materna e de práticas culturais tradicionais tem sido uma prioridade
                para os Terena, visando manter vivas suas tradições e identidade étnica (UNEMAT, 2021).
            </p>
        </div>
    </section>

    <section  className="infos_textuais2">  
      
         <div className="blocos_texto"> 
            <p className="bloco_texto">
                Essas manifestações culturais e artísticas são essenciais para a manutenção da identidade e
                coesão social do povo Terena, garantindo a continuidade de suas tradições e saberes ancestrais.
            </p>
        </div>
    </section>


    <section  className="infos_textuais1">  
      
         <div className="blocos_texto"> 
            <h2 className="titulo_sessao_escura" >Educação e Escola</h2>
            <p className="bloco_texto">
                A educação desempenha um papel crucial na preservação e revitalização da língua Terena, com
                diversas iniciativas focadas em programas educacionais bilíngues, atuação das escolas e
                desenvolvimento de materiais didáticos específicos.
            </p>
        </div>
    </section> 


    <section  className="infos_textuais1">  
    
         <div className="blocos_texto"> 
              <h2 className="titulo_sessao_escura" >Programas Educacionais e Bilíngues</h2>
            <p className="bloco_texto">
                A implementação de programas educacionais bilíngues tem sido fundamental para a
                manutenção da língua Terena. Esses programas buscam integrar o ensino da língua materna com
                o português, promovendo uma educação intercultural que valoriza a identidade indígena.
                Estudos indicam que o ensino bilíngue no currículo escolar das aldeias é essencial para o resgate
                cultural e social dos indígenas, contribuindo para a preservação da identidade cultural e étnica
                das novas gerações (SILV A, 2014).
            </p>
        </div>
    </section> 

    <section  className="infos_textuais1">  
     
         <div className="blocos_texto"> 
             <h2 className="titulo_sessao_escura" >O Papel das Escolas na Preservação da Língua</h2>
            <p className="bloco_texto">
                As escolas indígenas desempenham um papel central na preservação da língua Terena. Elas não
                apenas ensinam a língua, mas também promovem a valorização da cultura e dos saberes
                tradicionais. A educação bilíngue nas escolas das aldeias é vista como uma forma de resgate
                cultural e social, garantindo que as novas gerações mantenham viva sua identidade étnica
                (SILV A, 2014).
            </p>
        </div>
    </section> 


    <section  className="infos_textuais1">  
     
         <div className="blocos_texto"> 
             <h2 className="titulo_sessao_escura" >Material Didático e Paradidático nas Escolas</h2>
            <p className="bloco_texto">
                A produção de materiais didáticos específicos é vital para o ensino eficaz da língua Terena.
                Projetos como o "Kalivôno: Kalihunoe Ike V o'um" resultaram na criação de livros bilíngues
                direcionados à educação infantil e à alfabetização em língua Terena, facilitando o processo de
                ensino-aprendizagem (SILV A; LEANDRO, 2019). Além disso, o projeto "Saberes Indígenas"
                lançou materiais escolares em língua Terena, como os livros "Textos e Atividades em Língua
                Terena" para o 1º e 2º anos, frutos do trabalho coletivo de professores indígenas, visando à
                alfabetização dos alunos nas aldeias (UNIVERSIDADE FEDERAL DE MATO GROSSO DO
                SUL, 2021).
            </p>
        </div>
    </section> 

    <section  className="infos_textuais1">  
         <div className="blocos_texto"> 
            <p className="bloco_texto">
                Essas iniciativas refletem o compromisso das comunidades e instituições em promover uma
                educação que respeite e valorize a língua e cultura Terena, assegurando sua continuidade para as
                futuras gerações.
            </p>
        </div>
    </section> 



    <section  className="section-clara-relativa" > 
          <div className="blocos_texto"> <h2 className="titulo-sessao">Personalidades Importantes</h2>
           </div>
       
        <div className="sessoes_leitura_horizontal" ref={scrollRef4} >
            
            <div className='bloco-leitura-vertical-vermelho' >
                 <div className="divMiniatura" > <img className="fotos"  src={marcosterena} /> </div>
                <div className='icone_texto_card'>  <h3>Marcos Terena</h3>  </div>
                <div className='icone_texto_card' > 
                    Marcos Terena é um destacado ativista e líder indígena do povo Terena. Ele tem se dedicado à
                    defesa dos direitos dos povos indígenas e à preservação de suas culturas. Sua atuação abrange a
                    participação em fóruns internacionais e a promoção de políticas públicas voltadas para as
                    comunidades indígenas. Marcos Terena é reconhecido por seu compromisso com a valorização e
                    disseminação da cultura Terena, incluindo sua língua nativa.
                </div> 
            </div>

            <div className='bloco-leitura-vertical-vermelho' >
                 <div className="divMiniatura" > <img className="fotos"  src={ordina} /> </div>
                <div className='icone_texto_card'>   <h3>Ondina</h3>   </div>
                <div className='icone_texto_card' > 
                    Ondina, mãe de indígenas surdos, destacou-se por sua luta em prol da educação de seus filhos e
                    pela oficialização da língua Terena de sinais. Ela é fluente em quatro línguas: Terena, português,
                    língua Terena de sinais e Libras (Língua Brasileira de Sinais). Sua dedicação resultou em
                    avanços significativos na inclusão e valorização da língua Terena de sinais, contribuindo para a
                    preservação e promoção da língua entre a comunidade surda indígena.
                </div> 
            </div>

            <div className='bloco-leitura-vertical-vermelho' >
                  <div className="divMiniatura" > <img className="fotos"  src={januariogarcia} /> </div>
                <div className='icone_texto_card'>    <h3>Januário Garcia</h3>   </div>
                <div className='icone_texto_card' > 
                    Januário Garcia, membro da comunidade Terena, ganhou destaque ao interpretar o hino nacional
                    brasileiro na língua Terena. Essa iniciativa não apenas emocionou a comunidade, mas também
                    evidenciou a preocupação com a preservação da língua indígena, que enfrenta ameaças de
                    extinção no Mato Grosso do Sul. Sua atuação serve como um símbolo da resistência cultural e
                    da importância de manter viva a língua Terena.
                </div> 
            </div>
        </div>
                    <div className="controles-scroll">
                      <button onClick={() => scroll(scrollRef4,'left')}>❮ Anterior</button>
                     <button onClick={() => scroll(scrollRef4, 'right')}>Próximo ❯</button>
               </div>
    </section>


    <section className="div_scroll">

        <div className="infos_textuais1">

        <h1 >Questões Atuais e Digitais</h1>

        </div>



        <div>


    <section className="infos_textuais2">  
     
         <div className="blocos_texto"> 
            <p className="bloco_texto3">
                A língua Terena enfrenta desafios contemporâneos significativos, especialmente no que diz
                respeito à sua preservação e adaptação ao mundo digital. No entanto, surgem também
                oportunidades para revitalização e promoção cultural por meio de plataformas digitais.
            </p>

        </div>

        
    </section> 


    <section className="infos_textuais2">  
     
         <div className="blocos_texto"> 
            <h2>Desafios Contemporâneos e Oportunidades</h2>
            <p className="bloco_texto3">
                A globalização e a predominância de línguas majoritárias ameaçam a continuidade de muitas
                línguas indígenas, incluindo a Terena. A transmissão intergeracional é comprometida quando os
                jovens adotam predominantemente o português, levando ao enfraquecimento do uso da língua
                nativa. Estudos indicam que, em algumas aldeias, são poucas as pessoas que utilizam a língua
                Terena, evidenciando a necessidade de iniciativas de revitalização (INSTITUTO
                SOCIOAMBIENTAL, 2025).
            </p>

        </div>

        
    </section> 


    <section className="infos_textuais2">  
     
         <div className="blocos_texto"> 
            <h2 >Uso Digital e em Plataformas Sociais</h2>
            <p className="bloco_texto3">
                A integração da língua Terena no ambiente digital representa uma oportunidade valiosa para sua
                promoção e preservação. A nova geração de indígenas está cada vez mais conectada, utilizando
                redes sociais e outras plataformas digitais para compartilhar aspectos de sua cultura e língua.
                Essa presença online facilita a disseminação da língua Terena para além das aldeias, alcançando
                um público mais amplo e promovendo o interesse pela preservação linguística (AGÊNCIA
                BRASIL, 2015).
            </p>

        </div>
    </section> 


    <section className="infos_textuais2">  
     
         <div className="blocos_texto"> 
           
            <p className="bloco_texto3">
                Além disso, projetos específicos têm sido desenvolvidos para valorizar a cultura e a língua
                Terena na internet. Por exemplo, o Instituto Federal de Mato Grosso do Sul (IFMS) promoveu
                oficinas de audiovisual junto à população Terena, resultando na produção de vídeos com
                conteúdo na língua Terena, disponibilizados online. Essas iniciativas não apenas preservam a
                língua, mas também a adaptam aos meios de comunicação contemporâneos, tornando-a
                relevante para as novas gerações (IFMS, 2019).
            </p>

        </div>
    </section> 


    <section className="infos_textuais2">  
     
         <div className="blocos_texto"> 
           
            <p className="bloco_texto3">
                Essas ações demonstram que, embora existam desafios significativos, as oportunidades
                proporcionadas pelo mundo digital podem ser aproveitadas para revitalizar e promover a língua
                Terena, garantindo sua continuidade e relevância nas próximas décadas.
            </p>

        </div>
    </section> 

    
   </div>

    </section>


     <section className="div_scroll">


          <div className="infos_textuais1">

        <h1 >Discussões Atuais</h1>

        </div>



        <div>

                <section className="infos_textuais2">  
     
                    <div className="blocos_texto"> 
           
                        <p className="bloco_texto3">
                             A língua Terena enfrenta desafios contemporâneos significativos, mas diversas iniciativas têm
                             sido implementadas para sua revitalização e promoção cultural.
                      </p>

                     </div>
                </section> 

                <section className="infos_textuais2">  
     
                    <div className="blocos_texto"> 
                        <h2>Projetos em Andamento e Revitalização</h2>
           
                        <p className="bloco_texto3">
                             A Fundação Nacional do Índio (FUNAI) tem apoiado diversos projetos de revitalização
                            linguística, incluindo ações específicas para a língua Terena. Em 2018, foram registradas 12
                            iniciativas focadas na revitalização de línguas indígenas, abrangendo atividades como
                            diagnósticos educacionais, intercâmbios culturais e ações de acompanhamento das políticas de
                            educação escolar indígena (FUNAI, 2018).
                        </p>

                     </div>
                </section> 


                <section className="infos_textuais2">  
     
                    <div className="blocos_texto"> 
           
                        <p className="bloco_texto3">
                             Diversos projetos têm sido desenvolvidos para revitalizar a língua Terena. Um exemplo é o
                             projeto "Kalivôno", promovido pelo Instituto de Pesquisa e Educação para o Desenvolvimento
                             Indígena (IPEDI), que visa a revitalização da língua e o fortalecimento de saberes tradicionais
                             indígenas. O nome "Kalivôno" significa "criança" ou "avançando um pouco mais" em Terena,
                             simbolizando o avanço na preservação cultural (IPEDI, 2019).
                        </p>

                     </div>
                </section> 

                <section className="infos_textuais2">  
     
                    <div className="blocos_texto"> 
           
                        <p className="bloco_texto3">
                             Além disso, o projeto "Sons da Aldeia", iniciado por professores indígenas da Aldeia Babaçu,
                             busca recuperar a autoestima e o interesse dos alunos no aprendizado da cultura tradicional,
                             incluindo a língua Terena. Esse projeto foi reconhecido e premiado pelo Ministério da Cultura
                             em 2016 (ASSOCIAÇÃO SOCIOAMBIENTAL KAMURI, 2016).
                        </p>

                     </div>
                </section> 

                


        </div>


     </section>

</div>
    
  );
};

export default Terena;
