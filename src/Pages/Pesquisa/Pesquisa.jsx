import "./Pesquisa.css";
import { MdOutlineDocumentScanner
 } from "react-icons/md";

const Pesquisa = () => {
  return (
    <>


     <div className='conteudo_pesquisa'>

          
              <div> <h1>Conheça as pesquisas realizadas</h1></div>

            <div className='botoes' >

                <button className='botao_pesquisa' >  <MdOutlineDocumentScanner className="icone_pesquisa" /> <div className="texto_pesquisa" > <br></br> Linguas Kinikinau MS: Um Estudo sobre a Vitalidade Linguística </div>  </button>
               <button className='botao_pesquisa' > <MdOutlineDocumentScanner className="icone_pesquisa"  /> <div className="texto_pesquisa" >  <br></br>  Linguas Kinikinau MS: Um Estudo sobre a Vitalidade Linguística  </div>    </button>
               <button className='botao_pesquisa' > <MdOutlineDocumentScanner className="icone_pesquisa" /> <div className="texto_pesquisa" > <br></br>  Linguas Kinikinau MS: Um Estudo sobre a Vitalidade Linguística  </div> </button>


            </div>

              <div className='botoes' >

               <button className='botao_pesquisa' > <MdOutlineDocumentScanner className="icone_pesquisa" /> <div className="texto_pesquisa" >  <br></br>  Linguas Kinikinau MS: Um Estudo sobre a Vitalidade Linguística </div> </button>
               <button className='botao_pesquisa' > <MdOutlineDocumentScanner className="icone_pesquisa" /> <div className="texto_pesquisa" > <br></br> Linguas Kinikinau MS: Um Estudo sobre a Vitalidade Linguística  </div>  </button>
                <button className='botao_pesquisa' ><MdOutlineDocumentScanner className="icone_pesquisa"  /> <div className="texto_pesquisa" > <br></br>   Linguas Kinikinau MS: Um Estudo sobre a Vitalidade Linguística  </div>  </button>
              



            </div>
        </div>

    </>
  );
};

export default Pesquisa;
