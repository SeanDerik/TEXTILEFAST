import { Navbar } from "../components/Navbar";
import { Destaques } from "../components/Destaques";
import Footer from "../components/Footer"; 
import '../styles/index.css';

export function Home() {
    return (
        <>
            <Navbar />
            <Destaques />
            <Footer /> 
        </>
    );
}

export default Home;
