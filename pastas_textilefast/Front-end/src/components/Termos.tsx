import React from 'react';
import '../styles/Termo.css';

const Termos: React.FC = () => {
  return (
    <div className="termos-container">
      <header className="termos-header">
        <h1>Termos e Condições da Textilefast</h1>
      </header>
      <div className="termos-content">
        <section className="termos-section">
          <h2>1. Taxas de Serviço</h2>
          <p>
            Nós, da <strong>Textilefast</strong>, trabalhamos para proporcionar um ambiente seguro e transparente para suas transações. Como parte do nosso serviço, tanto compradores quanto fornecedores concordam em pagar uma pequena porcentagem sobre cada transação realizada.
          </p>
          <ul>
            <li><strong>Compradores:</strong> Você concorda em pagar uma pequena taxa sobre o valor total de cada compra realizada na plataforma.</li>
            <li><strong>Fornecedores:</strong> Você concorda em pagar uma pequena taxa sobre o valor total de cada venda realizada através da plataforma.</li>
          </ul>
          <p>
            Essas taxas são necessárias para manter a plataforma funcionando de forma eficiente, segura e sempre à disposição para facilitar suas compras e vendas.
          </p>
        </section>
        <section className="termos-section">
          <h2>2. Compromisso de Honestidade</h2>
          <p>
            Nosso compromisso é criar uma experiência de compras e vendas sem interrupções, com a garantia de que todas as transações sejam realizadas de maneira justa. Por isso, tanto compradores quanto fornecedores concordam em:
          </p>
          <ul>
            <li><strong>Não contornar o sistema:</strong> Nenhuma parte pode tentar realizar compras ou vendas diretamente entre si, fora da plataforma, com o intuito de evitar o pagamento das taxas. A utilização da nossa plataforma é fundamental para manter a segurança de todas as transações e garantir que todos possam confiar no sistema.</li>
            <li><strong>Respeitar as regras:</strong> Todos os envolvidos (compradores e fornecedores) devem agir de boa fé e respeitar os acordos feitos dentro da plataforma, mantendo um ambiente de negócios honesto e transparente.</li>
          </ul>
        </section>
        <section className="termos-section">
          <h2>3. Garantias e Responsabilidades</h2>
          <p>
            A <strong>Textilefast</strong> não se responsabiliza por acordos realizados fora da plataforma, seja entre compradores ou fornecedores. A plataforma oferece todas as ferramentas para facilitar a comunicação e o processo de compra e venda, garantindo que todas as transações sejam feitas de maneira segura e eficiente.
          </p>
        </section>
        <section className="termos-section">
          <h2>4. Alterações nos Termos</h2>
          <p>
            Esses termos podem ser atualizados periodicamente. Qualquer alteração será notificada na plataforma e, ao continuar utilizando nossos serviços, você concorda com as novas condições.
          </p>
        </section>
        <footer className="termos-footer">
          <p>Agradecemos por fazer parte da comunidade <strong>Textilefast</strong>. Estamos comprometidos em proporcionar uma experiência excelente e transparente para todos os nossos usuários.</p>
          <p><strong>Obrigado por confiar na Textilefast!</strong></p>
        </footer>
      </div>
    </div>
  );
};

export default Termos;
