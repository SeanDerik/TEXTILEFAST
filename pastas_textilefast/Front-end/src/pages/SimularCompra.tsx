import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import '../styles/SimularCompra.css';

export function SimularCompra() {
    const { produto_id } = useParams<{ produto_id: string }>();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [quantidade, setQuantidade] = useState(1);
    const [endereco, setEndereco] = useState('');
    const [frete, setFrete] = useState('padrao');
    const [metodoPagamento, setMetodoPagamento] = useState('credito');
    const [precoProduto, setPrecoProduto] = useState(0);

    const freteValores: { [key: string]: number } = {
        padrao: 10.0,
        expresso: 20.0,
        gratis: 0.0
    };

    useEffect(() => {
        if (state) {
            console.log('State recebido:', state);
            setPrecoProduto(Number(state.preco) || 100.0);
            setEndereco(state.endereco || '');
        }
    }, [state]);

    const totalPedido = useMemo(() => {
        const totalProduto = precoProduto * quantidade;
        const valorFrete = freteValores[frete];
        return totalProduto + valorFrete;
    }, [quantidade, precoProduto, frete]);

    const handleCompra = () => {
        if (!endereco) {
            alert('Por favor, preencha o endereço de entrega!');
            return;
        }

        alert(`Compra finalizada!\n
        Produto ID: ${produto_id}\n
        Quantidade: ${quantidade}\n
        Endereço: ${endereco}\n
        Frete: ${frete}\n
        Método de Pagamento: ${metodoPagamento}\n
        Total: R$ ${totalPedido.toFixed(2)}`);

        navigate('/home');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo" onClick={() => navigate('/home')}>
                    <span>Textilefast</span>
                </div>
                <ul className="navbar-menu">
                    <li onClick={() => navigate('/catalogpage')}>Catálogo</li>
                    <li onClick={() => navigate('/')}>Logout</li>
                </ul>
            </nav>

            <div className="simular-compra">
                <h1>Simular Compra</h1>

                <div className="produto-info">
                    <p><strong>Produto ID:</strong> {produto_id}</p>
                    <p><strong>Preço Unitário:</strong> R$ {precoProduto.toFixed(2)}</p>
                </div>

                <div className="input-group">
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(Number(e.target.value))}
                        min="1"
                    />
                </div>

                <div className="input-group">
                    <label>Endereço de Entrega:</label>
                    <textarea
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        placeholder="Digite seu endereço completo..."
                    />
                </div>

                <div className="input-group">
                    <label>Tipo de Frete:</label>
                    <select value={frete} onChange={(e) => setFrete(e.target.value)}>
                        <option value="padrao">Padrão (R$ 10,00)</option>
                        <option value="expresso">Expresso (R$ 20,00)</option>
                        <option value="gratis">Frete Grátis</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Método de Pagamento:</label>
                    <select value={metodoPagamento} onChange={(e) => setMetodoPagamento(e.target.value)}>
                        <option value="credito">Cartão de Crédito</option>
                        <option value="boleto">Boleto Bancário</option>
                        <option value="pix">Pix</option>
                    </select>
                </div>

                <div className="resumo-pedido">
                    <h3>Resumo do Pedido</h3>
                    <p>Preço dos Produtos: R$ {(precoProduto * quantidade).toFixed(2)}</p>
                    <p>Frete: R$ {freteValores[frete].toFixed(2)}</p>
                    <h4>Total: R$ {totalPedido.toFixed(2)}</h4>
                </div>

                <button onClick={handleCompra} className="finalizar-compra">
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
}
