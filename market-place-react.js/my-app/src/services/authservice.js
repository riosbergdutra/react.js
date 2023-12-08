import api from './api';

const loginUserApi = async (userValues) => {
    try {
        const response = await api.post('/usuario/find', userValues);
        return response.data; // Retorna apenas os dados da resposta
    } catch (error) {
        console.error(error);
        throw error; // Lança o erro para ser tratado no componente que chama esta função
    }
};

const registerUser = async (adduserValues) => {
    try {
        const response = await api.post('/usuario/create', adduserValues);
        return response.data; // Retorna apenas os dados da resposta
    } catch (error) {
        console.error("Error during registration:", error);
        throw error; // Lança o erro para ser tratado no componente que chama esta função
    }
};
const loginUserId = async (id) => {
    try {
        const response = await api.get(`/usuario/findById/${id}`);
        return response.data; // Retorna apenas os dados da resposta
    } catch (error) {
        console.error(error);
        throw error; // Lança o erro para ser tratado no componente que chama esta função
    }
};

export { loginUserApi, registerUser, loginUserId };