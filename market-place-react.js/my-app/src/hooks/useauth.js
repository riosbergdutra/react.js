import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi } from "../services/authservice";

const UseAuth = () => {
    // Estado para controlar se o usuário está logado ou não
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    // Hook do React Router para navegação
    const navigate = useNavigate();

    useEffect(() => {
        // Tente obter os dados do usuário do localStorage ao iniciar a aplicação
        const storedUserInfo = localStorage.getItem('userinfo');

        if (storedUserInfo) {
            // Se houver dados no localStorage, atualize o estado do usuário como logado
            setUserLogged(true);
        }
        setLoading(false);
    }, []); // Este efeito só é executado uma vez ao montar o componente

    // Função para realizar o login do usuário
    const loginUser = async (inputValues) => {
        try {
            const data = await loginUserApi(inputValues);

            // Salve os dados do usuário no localStorage
            localStorage.setItem('userinfo', JSON.stringify(data));

            // Atualize o estado do usuário como logado e redirecione para a página inicial
            setUserLogged(true);
            navigate('/');
        } catch (error) {
            console.error('Erro durante o login:', error);
            // Trate o erro conforme necessário (ex.: exibindo uma mensagem de erro para o usuário)
        }
    };

    // Função para realizar o logout do usuário
    const logout = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('/login');
    };

    return { userLogged, loading, loginUser, logout };
}

export default UseAuth;