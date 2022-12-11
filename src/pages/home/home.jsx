import React, { useContext } from 'react';
import { Contexto } from '../../context/auth/auth';
import "./styles.css"

const Home = () => {

    const {sairDaConta} = useContext(Contexto)

    function sair(){
        sairDaConta()
     
    }


    return (
        <div className='logado'>
            <div className='logadoSucesso'>
            <h2>Parabens você esta logado</h2>
            <button  className='botao' onClick={sair}>Sair da conta</button>
            </div>
            
        </div>
    );
}

export default Home;
