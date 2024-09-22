import { PerfilGitHubDTO } from "../model/perfil_github";

export function getPerfilGitHub() : PerfilGitHubDTO {
    return perfilGitHub;
}

const perfilGitHub : PerfilGitHubDTO = 
    {
        "avatar_url": "https://avatars.githubusercontent.com/u/103151779?v=4",
        "url": "https://api.github.com/users/thailsonAlmeida",
        "followers": 1,
        "name": "Thailson Almeida",
        "location": 'Brazil',
    };

