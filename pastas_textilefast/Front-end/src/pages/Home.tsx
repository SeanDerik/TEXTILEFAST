import { useEffect, useState } from 'react';
import { Navbar } from "../components/Navbar";
import { Destaques } from "../components/Destaques";
import Footer from "../components/Footer";
import axios from 'axios';
import '../styles/index.css';

export function Home() {
    const [produtos, setProdutos] = useState<any[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/produtos/getProdutos');
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        fetchProdutos();
    }, []);

    return (
        <>
            <Navbar />
            <Destaques produtos={produtos} />
            <Footer />
        </>
    );
}

export default Home;
