import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import letreiro from '../assets/letreiro_logo.svg';
import ms1 from '../assets/ms1.svg';
import ms2 from '../assets/ms2.svg';
import ms3 from '../assets/ms3.svg';
import ms4 from '../assets/ms4.svg';
import ms5 from '../assets/ms5.svg';
import ms6 from '../assets/ms6.svg';
import ms7 from '../assets/ms7.svg';
import desenho_indigena from '../assets/desenhos_indigenas.svg'

import img_pesquisa from '../assets/Pesquisas.svg';
import img_fotos from '../assets/Fotos_registros.svg';
import nosso_curso from '../assets/nosso_curso.svg';


import { MdOutlineSearch,  MdOutlineAddAPhoto, MdClass
 } from "react-icons/md";
import Pesquisa from './Pesquisa/Pesquisa';


const Home = () => {

    const imagensMS = [ms1, ms2, ms3, ms4, ms5, ms6, ms7];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % imagensMS.length);
    }, 5000); 
    return () => clearInterval(id);
  }, [imagensMS.length]);

    


    return(


    <main >


        <div className='conteudo'>


        <div className="apresentacao" >

            <div className='img_logo' >

                
               
                  <img className='letreiro'  src= {letreiro} alt="" /> 
                    <img className='imagem_ms' src= {imagensMS[idx]} alt="" /> 

            </div>


               
           </div>
           <img className='desenho_indigena' src={desenho_indigena} />


        <div className='sessoes_projeto' >

            <div> <h1>Conheça o Projeto</h1></div>

            <div className='sessoes' >

                <Link to="/pesquisa" className='sessao' >

                    <div className='icone_texto_card'><MdOutlineSearch /></div>
                    
                <div className='icone_texto_card' > <img src={img_pesquisa} /> </div> 
                </Link>

                  <div className='sessao' >

                    <div className='icone_texto_card' > <MdOutlineAddAPhoto /></div>
                    
                       <div className='icone_texto_card'> <img src={img_fotos} /> </div>
                </div>

                   <div className='sessao' >

                    <div className='icone_texto_card'><MdClass /></div>
                    
                     <div className='icone_texto_card'> <img src={nosso_curso} />  </div>
                </div>

                
                  

                   


            </div>

            
        </div>
          <img className='desenho_indigena' src={desenho_indigena} />


        <div className='linguagens'>

          
              <div> <h1>Escolha uma língua para conhecer</h1></div>

            <div className='botoes' >

                <Link to='/ofaie' className='botao_linguagem' > <h1>OFAIÉ  </h1></Link>
               <button className='botao_linguagem' > <h1>  TERENA </h1> </button>
               <button className='botao_linguagem' > <h1>  KINIKINAU</h1></button>


            </div>

              <div className='botoes' >

               <button className='botao_linguagem' > <h1>GUATÓ</h1> </button>
               <button className='botao_linguagem' > <h1>KADIWEU </h1> </button>
              



            </div>
        </div>
        <img className='desenho_indigena' src={desenho_indigena} />


        </div>

      
           
    </main>

    )
}

export default Home; 