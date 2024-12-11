import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Profile.css';

const PerfilFornecedor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [fornecedor, setFornecedor] = useState<any>(null);

    useEffect(() => {
        const fetchFornecedor = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/produtos/fornecedor/${id}`);
                setFornecedor(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do fornecedor:", error);
            }
        };

        fetchFornecedor();
    }, [id]);

    if (!fornecedor) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>{fornecedor.nome_fantasia}</h1>
                <p>{fornecedor.razao_social}</p>
                <p>{fornecedor.email}</p>
                <p>{fornecedor.telefone}</p>
                <p>{fornecedor.endereco}</p>
                <p>{fornecedor.tipo_empresa}</p>
            </div>
        </div>
    );
};

export default PerfilFornecedor;
