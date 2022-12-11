import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarSessao } from "../../service/api/api";

export const Contexto = createContext();
export const AutenticarProvider = ({ children }) => {
  const [loading, setLoadind] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  //const [tokin, setTokin] = useState(null)

  useEffect(() => {


   
   /* let _data = {
      "email": "michael.lawson@reqres.in",
      "password": "mateus dos santos silva"
    }
    
    fetch('https://reqres.in/api/register', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
      console.log(json)
      setTokin(json.token)
    })
    
    //.catch(err => console.log(err))*/
    
    
    const recumperarUsuario = localStorage.getItem("user")
    if(recumperarUsuario){
     setUser( JSON.parse(recumperarUsuario))
     console.log(JSON.parse(recumperarUsuario));
    }
    console.log(recumperarUsuario)
    setLoadind(false)
  },[])


  const login =  async (email, senha) => {
     
    const response = await criarSessao(email, senha)
    console.log("Login contexto:", response);
   
    const logarUsuario = response.data;
    console.log("Login usuarios logado :", logarUsuario);
    
    console.log("ID: ", response.data.id);
    console.log("Tokin: ", response.data.token);
    
    /*{
    //seria a resposta da section 
    id:"123",
    email,
    token: tokin
    }
    //Aqui quardaria o token*/

   
    
    if(response.data.token){
      setUser(logarUsuario);
      localStorage.setItem("user", JSON.stringify(logarUsuario))
      navigate("/")
    }
    else{

    }

    //user !== null
    //autenticado = true

    //user !== null
    //autenticado = false
    //conversão Boolean(user) ou !!user
    //trasforma no casting de Boolean
    //alem de guardar informaçoes como o propio Boolean  também pode quardar funções para ser chamada em callbeck
  };

  const sairDaConta = () => {
    console.log("Saindo da conta");
    localStorage.removeItem("user")
    setUser(null)
    navigate("/login")
  };

  return (
    <Contexto.Provider value={{ autenticado: !!user, user, login, sairDaConta, loading }}>
      {children}
    </Contexto.Provider>
  );
};
export default AutenticarProvider;
