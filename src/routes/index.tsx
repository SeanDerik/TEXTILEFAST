import { Home } from "../pages/Home"
import { Test } from "../pages/Test"
import { Paginaproduto } from "../pages/Paginaproduto"
import { Routes, Route } from "react-router-dom"

export function Approutes(){
    return(
    <Routes>
      <Route path="/home" element={ <Home /> } />
      <Route path="/test" element={ <Test /> } />
      <Route path="/product-page" element={ <Paginaproduto /> } />    
    </Routes>
    )
}