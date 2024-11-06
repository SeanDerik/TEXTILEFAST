import { Navbar } from "../components/Navbar";
import { Profilepic } from "../components/Profilepic";
import { Info } from "../components/Info";
import { Produtos } from "../components/Produtos";
import "../styles/Profile.css";  // Arquivo CSS específico para o perfil

export function Profile() {
    return (
        <>
            <Navbar />
                <div className="profilestuff">
                    <Profilepic />
                    <Info />
                </div>
            <Produtos />
        </>
        
    );
}
