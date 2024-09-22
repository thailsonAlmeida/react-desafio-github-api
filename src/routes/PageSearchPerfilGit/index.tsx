import { useEffect, useState } from "react";
//import * as perfil_github_service from  "../../service/perfil_github_service";
import "./style.css";
import { PerfilGitHubDTO } from "../../model/perfil_github";
import axios from "axios";

export default function PageSearchPerfilGit(){
   
    const [perfilGitHub, setPerfilGitHub] = useState<PerfilGitHubDTO>();

    useEffect(() => {
        axios.get("https://api.github.com/users/thailsonAlmeida").then(response => {
            console.log(response.data);
            setPerfilGitHub(response.data);
        })

        
    }, []);

    

    

    return (
        <>
        <section className="containerBody mt30 customBodyGitSearch">
            <h2>Encontre um perfil Github</h2>
            <div className="mt30"> 
                <form action="">
                    <input type="text" placeholder="Usuário Github" />
                </form> 
            </div>            
            <button>Encontrar</button>
        </section>
        
        <section className="containerBody mt30 customBodyGitPerfil">
            <div className="imagem-perfil">
                <img src={perfilGitHub?.avatar_url} alt="" />
            </div>
            <div className="dados-perfil">
                <h3>Informações</h3>
                <div className="dados-card">
                    <p><b>Perfil: </b>{perfilGitHub?.url}</p>
                </div>
                <div className="dados-card">
                    <p><b>Seguidores: </b>{perfilGitHub?.followers}</p>
                </div>
                <div className="dados-card">
                    <p><b>Localidade: </b>{perfilGitHub?.location}</p>
                </div>
                <div className="dados-card">
                    <p><b>Nome: </b>{perfilGitHub?.name}</p>
                </div>
            </div>
        </section>
        </>
    );
}