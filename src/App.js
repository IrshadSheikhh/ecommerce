import { useState,useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart/Cart";
import HomePage from "./components/Home/home";
import NavBar from "./components/NavBar/navbar";
import Shop from "./components/Shop/shop";

function App() {
  const [data,setData] = useState([])




  return (
    <div>
      
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
    </div>
     
  );
}

export default App;