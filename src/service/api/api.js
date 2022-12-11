import axios from "axios";

export const api = axios.create({
    baseURL:"https://reqres.in/api/"
})

export  const criarSessao = async (email, password) => {
    return api.post("/login",{email, password})
}
//"email": "michael.lawson@reqres.in",
//"password": "mateus dos santos silva"