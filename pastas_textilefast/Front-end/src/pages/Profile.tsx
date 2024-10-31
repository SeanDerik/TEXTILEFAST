import Textilefastlogo from "../assets/textilefastlogo.png";
import "../styles/Profile.css";  // Arquivo CSS específico para o perfil

export function Profile() {
    return (
        <>
            <img src={Textilefastlogo} width="20%" className="littlelogo" alt="Textile Fast Logo" />
            <div className="profile-container">
                <h1>Perfil do Usuário</h1>
                <div className="profile-card">
                    <div className="profile-info">
                        <h2>Nome: Ananda</h2>
                        <p>Email: ananda@email.com</p>
                        <p>Endereço: Rua Exemplo, 123</p>
                        <p>Telefone: (99) 99999-9999</p>
                    </div>
                    <div className="profile-edit">
                        <button className="edit-button">Editar Perfil</button>
                    </div>
                </div>
            </div>
        </>
    );
}
