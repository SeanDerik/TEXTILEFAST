import { Navbar } from "../components/Navbar";
import { Destaques } from "../components/Destaques";
import '../styles/index.css'
export function Home(){
    return(
        <>
            <Navbar />
            <Destaques />
        </>
    )
}

export default Home;