const Usuario = require("../model/usuario")

const findUserByIdService = (id) => {
    return Usuario.findById(id)
}

const findAllUsersService = () => {
    return Usuario.find()
}

const findUserService = ({ email }) => {
    return Usuario.findOne({ email });
}
const createUserService = (body) => {
    return Usuario.create(body)
}
const updateUserSerivce = (id,body) => {
    return Usuario.findByIdAndUpdate(id,body, {returnDocument: "after"})
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id)
}

const addUserAddresService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        { _id: id },
        {
            $push: {
                enderecos: endereco
            }
        },
        {
            includeResultMetadata: false,
            new: true 
        }
    );
}

const removeUserAddresService = (id, addresId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                enderecos: {
                    _id: addresId
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const addUserFavProductSerivce = (id,produto) => {

} 

const removeUserFavProductService = (produto) => {

}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    findUserService,
    updateUserSerivce,
    removeUserService,
    addUserAddresService,
    removeUserAddresService,
    addUserFavProductSerivce,
    removeUserFavProductService
}