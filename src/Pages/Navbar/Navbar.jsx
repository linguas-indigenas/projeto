 import { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { SlArrowDown } from "react-icons/sl";
 import logo from "../../assets/logo_minimo.svg"


 import './Navbar.css'



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const alteraIsOpen = () => setIsOpen(!isOpen);


    return(


        <nav className= "navbar" >

            <div className='content' >


          <div className='logo_projeto' >
           <Link to= "/">

           <div ><img className='imagem_logo' src={logo} /></div>

           
           
           </Link>
            </div>

            <div className='paginas_projeto'>  

                 <Link to= "/">

           <div className='paginas_menu' > <h4 className='texto' >Início</h4> </div>
           
           </Link>

           <div className="dropdown" >

           <button onClick={alteraIsOpen} className="dropdown-button" > 


          

           <div className='paginas_menu' > <h4 className='texto' >Línguas <SlArrowDown /></h4> </div>
           
           

           </button>

           {isOpen && (

            <ul className="dropdown-list"> 

            <li> <Link to= "/guato"> Guató</Link></li> 
            <li> <Link to= "/kadiweu"> Kadiweu</Link></li> 
            <li> <Link to= "/kinikinau"> Kinikinau</Link></li>
            <li> <Link to= "/ofaie"> Ofaié</Link></li>
            <li> <Link to= "/terena"> Terena</Link></li> 
            <li> <Link to= "/braslind">Braslind</Link></li> 
           </ul>

            )
           
           }

           </div>


            <Link to= "/projeto">

           <div className='paginas_menu' > <h4 className='texto' >Pesquisas</h4> </div>
           
           </Link>

           <Link to= "/projeto">

           <div className='paginas_menu'  ><h4 className='texto' > Sobre </h4></div>
           
           </Link>

         
            </div>






         </div>
        </nav>


     




    )
}


export default Navbar;


