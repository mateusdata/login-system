import  { React , useContext} from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import LoginPage from "../pages/loginPage/loginPage";
import AutenticarProvider, { Contexto } from "../context/auth/auth";


const AppRoutes = () => {

  const Private = ({children}) =>{
    const {autenticado, loading} = useContext(Contexto);
    if(loading){return(
      <div className="loading">Carregando...</div>
    )}

    if(!autenticado){
      return <Navigate to="/login"/>
    }
    return children
  }
  
  return (
    <BrowserRouter>
      <AutenticarProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/" element={<Private><Home/></Private>} />
        </Routes>
      </AutenticarProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
