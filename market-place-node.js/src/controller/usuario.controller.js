const userService = require("../service/usuario.service");
const bcrypt = require('bcrypt');

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuario não encontrado" });
        }

        return res.status(200).send(user);
    } catch (err) {
        if (err.kind) {
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: "Id informado está incorreto, tente novamente!" });
        }
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: "Erro inesperado tente novamente!" });
    }
};

const findAllUsersController = async (req, res) => {
    try {
        res.status(200).send(await userService.findAllUsersService());
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: "Erro inesperado tente novamente!" });
    }
};

const findUserController = async (req, res) => {
    try {
        const { email, senha } = req.body;
        console.log('Dados recebidos no endpoint:', { email, senha });

        // Verifique se o usuário existe no banco de dados
        const user = await userService.findUserService({ email });
        console.log('Usuário encontrado:', user);


        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Verifique a senha
        const passwordMatch = await bcrypt.compare(senha, user.senha);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erro durante o login:', error.message);
        res.status(500).json({ message: 'Erro inesperado durante o login' });
    }
}

const createUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({ message: `O campo 'Nome' precisa ser preenchido!` });
        }

        return res.status(201).send(await userService.createUserService(body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateUserController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({ message: `O campo 'Nome' precisa ser preenchido!` });
        }

        return res.send(await userService.updateUserSerivce(req.params.id, body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const removeUserController = async (req, res) => {
    try {
        const deletedUser = await userService.removeUserService(req.params.id);

        if (deletedUser == null) {
            res.status(404).send({ message: `Usuario não encontrado, tente novamente!` });
        } else {
            res.status(200).send({ message: `Sucesso, usuario deletado!` });
        }
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const addUserAddresController = async (req, res) => {
    try {
        req.body.createAt = new Date();
        const endereco = await userService.addUserAddresService(req.params.id, req.body);

        if (endereco.value == null) {
            res.status(400).send({ message: `Algo deu errado no endereco, tente novamente!` });
        } else {
            res.status(200).send({ message: `Endereço adicionado com sucesso!` });
        }
    } catch (err) {
        console.error(`Erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado: ${err.message}` });
    }
};

const removeUserAddresController = async (req, res) => {
    try {
        const endereco = await userService.removeUserAddresService(req.body.id, req.body.addresId);
        let found = false;

        endereco.value.enderecos.map((valor, chave) => {
            if (valor._id == req.body.addresId) {
                found = true;
            }
        });

        if (found) {
            res.status(200).send({ message: `Endereço removido com sucesso!` });
        } else {
            res.status(400).send({ message: `Algo deu errado no endereco, tente novamente!` });
        }
    } catch (err) {
        console.error(`Erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado: ${err.message}` });
    }
};

const addUserFavProductController = async (req, res) => {
    try {
        // Lógica para adicionar produto favorito
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const removeUserFavProductController = async (req, res) => {
    try {
        // Lógica para remover produto favorito
    } catch (err) {
        console.log(`erro: ${err.message}`);
        res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    findUserController,
    updateUserController,
    removeUserController,
    addUserAddresController,
    removeUserAddresController,
    createUserController,
    addUserFavProductController,
    removeUserFavProductController,
}