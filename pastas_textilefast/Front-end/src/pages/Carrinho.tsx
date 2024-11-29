import { Navbar } from "../components/Navbar";
import "../styles/Profile.css";  // Arquivo CSS específico para o perfil
import Cartpage from "./Cartpage";

export function Carrinho() {
    return (
        <>
          <Navbar />
          <Cartpage />
        </>
    );
}

export default Carrinho;