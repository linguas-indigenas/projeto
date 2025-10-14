
import "./Footer.css"; 
import logo_completo from "../../assets/logo_projeto_completo.svg"

import { FaInstagram, FaFacebookF } from "react-icons/fa";


const Footer = () =>{



    return(

     <footer className="rodape" >

        <div className="dados_uteis" > 


       
        <img className="logo_completo" src={logo_completo}/>

        <div className="redes_sociais">
            <p>Siga-nos:</p>
            <div className="icone_redes"> <FaInstagram/></div>
            <div className="icone_redes" ><FaFacebookF/></div>
        </div>
        


        <div className="dados_contatos" >

            <div>

            <p>Contatos</p>

            <p>E-mail: linguasindigenasms@gmail.com</p>
            <p>Profª Responsável: Adriana Viana Postigo Paravisini </p>
             </div>

        </div>

      

        </div>

        <div className="dados_direitos" > 
         <p>&copy; {new Date().getFullYear()} . Todos os direitos reservados.</p>
         <p>Projeto Linguas Indígenas MS.</p>
         </div>
     </footer>
    );
}

export default Footer; 