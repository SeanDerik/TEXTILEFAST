import "../styles/Login.css";
import Textilefastlogo from "../assets/textilefastlogo.png";
import { Loginbutton } from "./Loginbutton";
import { Registrarbutton } from "./Registrarbutton";

export function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <img src={Textilefastlogo} width="70%" className="littlelogo" alt="Textile Fast Logo" />
        <div className="button-container">
          <Loginbutton />
          <Registrarbutton />
        </div>
      </div>
    </div>
  );
}

export default Login;
