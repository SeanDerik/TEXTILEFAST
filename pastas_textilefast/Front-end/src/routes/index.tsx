import { Home } from "../pages/Home";
import { Paginaproduto } from "../pages/Paginaproduto";
import { Catalogpage } from "../pages/Catalogpage";
import Cadastro from "../pages/Cadastro";
import { Routes, Route } from "react-router-dom";
import '../styles/index.css';

export function Approutes() {
    return (<>
            <link 
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" 
                rel="stylesheet" 
            />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/product-page" element={<Paginaproduto />} />
                <Route path="/catalogpage" element={<Catalogpage />} />

            </Routes>
        </>
    );
}
