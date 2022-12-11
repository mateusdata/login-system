import React, { useState } from "react";
import "./styles.css";
import { useContext } from "react";
import { Contexto } from "../../context/auth/auth";

const LoginPage = () => {

  const {autenticado, login} = useContext(Contexto);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const henderSubmit = (e) => {
    e.preventDefault();
   // localStorage.setItem(email, password)
    console.log("submit", {email, password}, "\n\n\n");
    login(email, password) //integração com meu contexto ou api 
  };


  return (
    <div className="login">
      <h1 className="title">Login - Reqres</h1>
      <p> Login - Status: <span style={{color: !autenticado ? "red": "green"}}>{String(autenticado)}</span></p>
      {autenticado? <p>Voçê já esta logado 😒</p>:false}
      <p>Requisição Ajax</p>
      <form onSubmit={henderSubmit} className="form">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder={"Informe o email"}/>
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Informe a senha"}/>
        </div>
        <div className="actions">
          <button type="submit">
            Entrar
          </button>
          <br />
          <span style={{color:"red"}}> </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
