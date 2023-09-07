const { UserModel } = require("../models/user-model");

const UserRepository = () => {
    const findUserByEmail = async (email) => {
        return UserModel.findOne({ where: { email: email } })
    }

    const findAllUsers = async () => {
        return UserModel.findMany()
    }

    const findUser = async (id) => {
        return UserModel.findUnique({ where: {id: id} })
    }

    const findUserByID = async (id) => {
        return UserModel.findUnique({ where: {id: id}})
    }

    const deleteUser = async (id) => {
        return UserModel.delete({ where:{id: id}, force: true})
    }

    const findUserPassword = async(password) => {
        return UserModel.findUnique({ password: password})
    }

    const findUserAndUpdate = async (userid, username, email, phone) => {
        return UserModel.update({
            where: {
                id: parseInt(userid)
            },
            username, email, phone
        }
        )
    }
    return {
        findUserByEmail,
        findAllUsers,
        findUser,
        findUserByID,
        findUserPassword,
        deleteUser,
        findUserAndUpdate
    }
}

module.exports = UserRepository();