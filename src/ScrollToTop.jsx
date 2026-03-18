import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faz o scroll para o topo (coordenadas 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Executa sempre que o caminho da URL mudar

  return null;
}