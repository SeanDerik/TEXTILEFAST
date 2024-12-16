import "../styles/Home.css";
import Textilefastlogo from "../assets/textilefastlogo.png";
import BackgroundImage from "../assets/textile-hands.png";
import { Loginbutton } from "./Loginbutton";
import { Registrarbutton } from "./Registrarbutton";

export function Login() {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="overlay">
        <div className="content">
          <img src={Textilefastlogo} alt="Textile Fast Logo" className="logo" />
          <h1>Bem-vindo ao Textile Fast</h1>
          <p>Conectando produtores têxteis ao mercado digital com eficiência e inovação.</p>
          <div className="button-container">
            <Loginbutton />
            <Registrarbutton />
          </div>
        </div>
      </div>
      <section className="about-us">
        <h2>Quem Somos Nós</h2>
        <p>
        A Textilefast surge para abrir novos horizontes aos produtores têxteis, conectando oportunidades e ampliando mercados. Junte-se a nós e leve suas vendas e compras para um novo patamar!
        </p>
      </section>
    </div>
  );
}

export default Login;
