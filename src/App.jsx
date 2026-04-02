import { useState, useEffect } from "react"; // IMPORTANTE: faltava isso
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home";
import Pesquisa from "./Pages/Pesquisa/Pesquisa";
import Guato from "./Pages/Linguagens/guato/guato";
import Kadiweu from "./Pages/Linguagens/kadiweu/kadiweu";
import Kinikinau from "./Pages/Linguagens/kinikinau/kinikinau";
import Ofaie from "./Pages/Linguagens/ofaie/Ofaie"; 
import Terena from "./Pages/Linguagens/terena/terena";
import Sobre from "./Pages/Sobre/sobre";
import Loading from "./Pages/Loading/Loading";
import './App.css';

function AppContent() {
  const [carregando, setCarregando] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCarregando(true);
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {carregando && <Loading />}
      
      <div className="pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/guato" element={<Guato />} />
          <Route path="/kadiweu" element={<Kadiweu />} />
          <Route path="/kinikinau" element={<Kinikinau />} />
          <Route path="/ofaie" element={<Ofaie />} />
          <Route path="/terena" element={<Terena />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router basename="/projeto">
      <AppContent />
    </Router>
  );
}

export default App;