import { Link } from "react-router-dom";
import "./styles.css";

export default function PageStart(){
    return (
        <section className="container mt30">
            <h2>Desafio Github API</h2>
            <h3>DevSuperior - Escola de programação</h3>
            <Link to={"/serach_perfil_git"}><button>Começar</button></Link>

            
        </section>
    );
}