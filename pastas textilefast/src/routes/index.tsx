import { Home } from "../pages/Home"
import { Test } from "../pages/Test"
import { Paginaproduto } from "../pages/Paginaproduto"
import { Routes, Route } from "react-router-dom"
import '../styles/index.css';

export function Approutes(){
    return(
    <>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
    <Routes>
      <Route path="/home" element={ <Home /> } />
      <Route path="/test" element={ <Test /> } />
      <Route path="/product-page" element={ <Paginaproduto /> } />    
    </Routes>
    </>
    )
}