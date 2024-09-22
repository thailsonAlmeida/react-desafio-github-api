import "./style.css";

export default function PageSearchPerfilGit(){
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
            <div className="imagem-perfil">Imgem</div>
            <div className="dados-perfil">
                <h3>Informações</h3>
                <div className="dados-card">
                    <p><b>Perfil: </b>https://api.github.com/users/acenelio</p>
                </div>
                <div className="dados-card">
                    <p><b>Seguidores: </b>1</p>
                </div>
                <div className="dados-card">
                    <p><b>Localidade: </b>Boituva</p>
                </div>
                <div className="dados-card">
                    <p><b>Nome: </b>Thailson Almeida</p>
                </div>
            </div>
        </section>
        
        </>
       

        
    );
}