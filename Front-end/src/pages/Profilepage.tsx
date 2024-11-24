import "../styles/Profile.css";
import Profile from "../components/Profile";
import { Navbar } from "../components/Navbar";

export function Profilepage() {
    return (
        <>
          <Navbar/>
          <Profile/>
        </>
    );
}

export default Profilepage;