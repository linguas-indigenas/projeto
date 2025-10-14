 import { Link } from 'react-router-dom';

 import logo from "../../assets/logo_minimo.svg"


 import './Navbar.css'



const Navbar = () => {



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


