import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/Pages/Navbar/Navbar";
import Footer from "../src/Pages/Footer/Footer";
import Home from "../src/Pages/Home";
import Pesquisa from "../src/Pages/Pesquisa/Pesquisa";
import Ofaie from "../src/Pages/Linguagens/ofaie/Ofaie"
import './App.css'

function App() {

  return (
   
     

       
     
     
     
      
    <Router basename="/projeto">

    
     
      <div className="pt-20">

         <Navbar/>
        <Routes>
         
          <Route  path="/" element={     <Home/> }/>

           <Route  path="/pesquisa" element={  <Pesquisa />  } />
              <Route  path="/ofaie" element={  <Ofaie />  } />
        </Routes>
         <Footer/>
      </div>
    </Router>
        
   
  )
}

export default App;
