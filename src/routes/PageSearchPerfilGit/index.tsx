import { useEffect, useState } from "react";
import "./style.css";
import { PerfilGitHubDTO } from "../../model/perfil_github";
import * as perfil_github_services from "../../service/perfil_github_service";

export default function PageSearchPerfilGit(){

    const myPerfil = "thailsonAlmeida"
   
    const [perfilGitHub, setPerfilGitHub] = useState<PerfilGitHubDTO>();

    useEffect(() => {
        perfil_github_services.getPerfilGitHub(myPerfil).then(response => {
            setPerfilGitHub(response.data);
        }).catch(error => {
            console.log(error.response.data);
        });
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

        {
            perfilGitHub ?
            
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

            : 
            
            <section className="containerBody mt30">                
                <div>
                    <h2>Erro ao buscar usuário</h2>
                </div>
            </section>
        }
        
        
        </>
    );
}