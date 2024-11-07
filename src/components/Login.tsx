import "../styles/Login.css";
import Textilefastlogo from "../assets/textilefastlogo.png";
import { Loginbutton } from "./Loginbutton";


export function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
            <img src={Textilefastlogo} width="70%" className="littlelogo" alt="Textile Fast Logo" />
                <div className="button-container">
                    <Loginbutton />
                    <button className="create-account-button">Create an Account</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
