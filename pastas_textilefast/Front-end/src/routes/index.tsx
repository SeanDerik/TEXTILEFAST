import { Home } from "../pages/Home";
/* import { Paginaproduto } from "../pages/Paginaproduto"; */
import { Catalogpage } from "../pages/Catalogpage";
import Cadastro from "../pages/Cadastro";
import { Loginpage } from "../pages/Loginpage";
import Loginformpage from "../pages/Loginformpage";
import Profilepage from "../pages/Profilepage";
import { Carrinho } from "../pages/Carrinho";
import AdicionarProduto from "../pages/adicionarProdutos";
import Termos from "../components/Termos";
import FornecedorProfile from "../pages/perfil-fornecedor"; 

import { Routes, Route } from "react-router-dom";
import '../styles/index.css';

export function Approutes() {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                {/* <Route path="/product-page" element={<Paginaproduto />} /> */}
                <Route path="/catalogpage" element={<Catalogpage />} />
                <Route path="/" element={<Loginpage />} />
                <Route path="/loginform" element={<Loginformpage />} />
                <Route path="/profile" element={<Profilepage />} />
                <Route path="/adicionar-produto" element={<AdicionarProduto />} />
                <Route path="/termos" element={<Termos />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/fornecedor-profile" element={<FornecedorProfile />} /> {/* Nova rota */}
            </Routes>
        </>
    );
}
