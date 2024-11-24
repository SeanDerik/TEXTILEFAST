
import { Roupas } from '../components/catalogcategories/Roupas';
import { Tecidos } from '../components/catalogcategories/Tecidos';
import { CamaMesaEBanho } from '../components/catalogcategories/CamaMesaEBanho';
import { Decoracao } from '../components/catalogcategories/Decoracao';
import { Bebes } from '../components/catalogcategories/Bebes';


export function Catalog(){
    return(
        <section className="categorias">  
            <section className="section">
                <Roupas />
            </section>
            
            <section className="section"> 
                <Tecidos />
            </section>

            <section className="section">
                <CamaMesaEBanho />
            </section>

            <section className="section">
                <Decoracao />
            </section>

            <section className="section">
                <Bebes />
            </section>
        </section>    
    )
}