import axios from "axios";

export function getPerfilGitHub(perfil : string) {
    return axios.get(`https://api.github.com/users/${perfil}`);
}


