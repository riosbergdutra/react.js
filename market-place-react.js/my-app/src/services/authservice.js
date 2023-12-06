import api from './api';

const loginUserApi = (userValues) => 
    api.post('/auth/create', userValues)
        .then((response) => {
            // Faça algo com a resposta aqui, se necessário
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });

        export { loginUserApi }