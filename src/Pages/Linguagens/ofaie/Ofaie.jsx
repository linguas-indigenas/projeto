import { useEffect, useRef, useState } from "react";
import "../linguagens.css";
import ofaie1 from "../../../assets/ofaie1.svg";
import ofaie2 from "../../../assets/ofaie2.svg";
import ofaie3 from "../../../assets/ofaie3.svg";
import ofaie4 from "../../../assets/ofaie4.svg";
import imagem_ms from "../../../assets/mapa_ms.svg";
import lingua_img1 from "../../../assets/linguas_img1.svg";
import lingua_img2 from "../../../assets/linguas_img2.svg";
import lingua_img3 from "../../../assets/linguas_img3.svg";
import lingua_img4 from "../../../assets/linguas_img4.svg";
import lingua_img5 from "../../../assets/linguas_img5.svg";
import audio from "../../../assets/audio.svg";
import desenho_indigena from "../../../assets/desenhos_indigenas.svg";


import { FaPlay, FaPause } from "react-icons/fa";
import som_lingua from "../../../assets/songs/audio_teste.mp3"; 

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

const Ofaie = () => {
  const imagensOfaie = [ofaie1, ofaie2, ofaie3, ofaie4];


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

          <div className="camada_escura" ></div>

          <div className="texto_linguagem"> <h1 className="titulo_linguagem" >Língua Ofaié</h1> </div>
        </div>

        {/* seção com as três imagens sobrepostas que vão sumindo no scroll */}
        <section ref={stackRef} className="stack-section">
          
          <div className="stack-sticky">
            <div className="stack-viewport">
              {linguaImgs.map((src, k) => (
                <img
                  key={k}
                  src={src}
                  alt=""
                  className="stack-img"
                  style={{
                    opacity: opacities[k],
                    zIndex: n - k, // topo acima
                  }}
                />
              ))}
            </div>
          </div>

    
        </section>

        <div className="blocos_texto"> 

         <p className="bloco_texto">
          Este trabalho se propõe a analisar a história e a realidade contemporânea do
          povo indígena Ofaié, com enfoque em sua trajetória desde os tempos ancestrais
          até os dias atuais. Os Ofaié habitam a região de Anodhi, no município de
          Brasilândia, Estado de Mato Grosso do Sul. Ao longo dos anos, percorreram
          diversos caminhos, seguindo os cursos dos rios Samambaia, Três Barras, Serra
          da Bodoquena, Rio Paraná e Sucuriú.
        </p>

         <p className="bloco_texto">
          Na década de 1950, foram expulsos da fazenda Boa Esperança, em Brasilândia, e
          cerca de 200 índios se estabeleceram nas margens úmidas do Rio Verde, sob a
          proteção do Serviço de Proteção ao Índio (SPI). Após muitas dificuldades e
          conflitos, retornaram a Brasilândia em busca de fixação nas terras onde seus
          antepassados estavam sepultados. Na década de 1960, devido à perseguição dos
          fazendeiros, sua população foi reduzida a poucas dezenas.
        </p>

        </div>



        <div className="video" >

       

       <iframe width="900" height="500" src="https://www.youtube.com/embed/-dKBt5btcq0?si=mRKDhMBsZCuBfsKB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
       </iframe>


       </div>

          



     
         <div className="blocos_texto"> 


        <p className="bloco_texto">
          Este trabalho se propõe a analisar a história e a realidade contemporânea do
          povo indígena Ofaié, com enfoque em sua trajetória desde os tempos ancestrais
          até os dias atuais. Os Ofaié habitam a região de Anodhi, no município de
          Brasilândia, Estado de Mato Grosso do Sul. Ao longo dos anos, percorreram
          diversos caminhos, seguindo os cursos dos rios Samambaia, Três Barras, Serra
          da Bodoquena, Rio Paraná e Sucuriú.
        </p>

        <p className="bloco_texto">
          Na década de 1950, foram expulsos da fazenda Boa Esperança, em Brasilândia, e
          cerca de 200 índios se estabeleceram nas margens úmidas do Rio Verde, sob a
          proteção do Serviço de Proteção ao Índio (SPI). Após muitas dificuldades e
          conflitos, retornaram a Brasilândia em busca de fixação nas terras onde seus
          antepassados estavam sepultados. Na década de 1960, devido à perseguição dos
          fazendeiros, sua população foi reduzida a poucas dezenas.
        </p>

         </div>
      </div>
    
  );
};

export default Ofaie;
