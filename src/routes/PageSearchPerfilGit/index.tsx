/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./style.css";
import { PerfilGitHubDTO } from "../../model/perfil_github";
import * as perfil_github_services from "../../service/perfil_github_service";
import CardPerfilGitHub from "../../components/CardPerfilGitHub";
import CardError from "../../components/CardError";

export default function PageSearchPerfilGit(){     
   
    const [perfilGitHub, setPerfilGitHub] = useState<PerfilGitHubDTO>();
    const [myPerfil, setMyPerfil] = useState<string>("");
    const [formData, setFormData] = useState<FormData>({
        namePerfilRepo: '',
    });
  
    useEffect(() => { 
        if(myPerfil != ""){
            perfil_github_services.getPerfilGitHub(myPerfil).then(response => {
                setPerfilGitHub(response.data);
            }).catch(error => {
                console.log(error.response.data);
            }); 
        }
    }, [myPerfil]);

    type FormData = {
        namePerfilRepo: string,
    }

    function handleNamePerfilRepo(event : any){
        setFormData({...formData, namePerfilRepo: event.target.value});
    }

    function handleFormSubmit(event : any){
        event.preventDefault();
        setMyPerfil(formData.namePerfilRepo);
    }

    return (
        <>
        <section className="containerBody mt30 customBodyGitSearch">
            <h2>Encontre um perfil Github</h2>
            <div className="mt30"> 
                <form onSubmit={handleFormSubmit}>                    
                    <div>
                        <input 
                            name="namePerfilRepo"
                            type="text" 
                            placeholder="Usuário Github" 
                            value={formData.namePerfilRepo}
                            onChange={handleNamePerfilRepo}
                        />
                    </div>
                    <button type="submit">Encontrar</button>
                </form> 
            </div>            
            
        </section>

        {
            perfilGitHub ?           
            <CardPerfilGitHub perfil={perfilGitHub} />

            :             
                myPerfil === "" 
                ?
                    <div></div>
                :
                    <CardError/>
        }
        </>
    );
}