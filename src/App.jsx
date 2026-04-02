import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


import Navbar from "../src/Pages/Navbar/Navbar";
import Footer from "../src/Pages/Footer/Footer";
import Home from "../src/Pages/Home";
import Pesquisa from "../src/Pages/Pesquisa/Pesquisa";
import Guato from "../src/Pages/Linguagens/guato/guato";
import Kadiweu from "../src/Pages/Linguagens/kadiweu/kadiweu";
import Kinikinau from "../src/Pages/Linguagens/kinikinau/kinikinau";
import Ofaie from "../src/Pages/Linguagens/ofaie/Ofaie";
import Terena from "./Pages/Linguagens/terena/terena";
import Sobre from "./Pages/Sobre/sobre"
import './App.css'

function App() {

  return (
   
     

       
     
     
     
      
    <Router basename="/projeto">

      <ScrollToTop />

    
     
      <div className="pt-20">

         <Navbar/>
        <Routes>
         
          <Route  path="/" element={     <Home/> }/>

           <Route  path="/pesquisa" element={  <Pesquisa />  } />
           <Route  path="/guato" element={  <Guato />  } />
           <Route  path="/kadiweu" element={  <Kadiweu />  } />
           <Route  path="/kinikinau" element={  <Kinikinau />  } />
           <Route  path="/ofaie" element={  <Ofaie />  } />
           <Route  path="/terena" element={  <Terena />  } />
           <Route  path="/sobre" element={  <Sobre />  } />
        </Routes>
         <Footer/>
      </div>
    </Router>
        
   
  )
}

export default App;
