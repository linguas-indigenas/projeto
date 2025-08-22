import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home"
import './App.css'

function App() {

  return (
   
     

       <Router basename="/linguas_indigenas/">
     
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home/>
              
              </>
            }
          />
        </Routes>
      </div>
    </Router>
   
  )
}

export default App;
