import { PerfilGitHubDTO } from "../../model/perfil_github";

type Props = {
    perfil : PerfilGitHubDTO
}

export default function CardPerfilGitHub({perfil } : Props){
    return(
        <>
        
            <section className="containerBody mt30 customBodyGitPerfil">
                <div className="imagem-perfil">
                    <img src={perfil?.avatar_url} alt="" />
                </div>
                <div className="dados-perfil">
                    <h3>Informações</h3>
                    <div className="dados-card">
                        <p><b>Perfil: </b>{perfil?.url}</p>
                    </div>
                    <div className="dados-card">
                        <p><b>Seguidores: </b>{perfil?.followers}</p>
                    </div>
                    <div className="dados-card">
                        <p><b>Localidade: </b>{perfil?.location}</p>
                    </div>
                    <div className="dados-card">
                        <p><b>Nome: </b>{perfil?.name}</p>
                    </div>
                </div>
            </section>
        
        </>
    );
}