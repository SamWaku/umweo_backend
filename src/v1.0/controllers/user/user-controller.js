const UserController = (serviceContainer) => {
    const registerUser = async (req, res) => {
        try {
            const user  = await serviceContainer.userservice.addUser(req.body);
            return res.status(201).json({
                success: true,
                message: `User successfully Registered`,
                data: user
            })
            
        } catch (error) {
            return res.status(400).json({
                success: false,
                error:error.message
            })
        }
    }

    const getUsers = async (req, res) => {
        try {
            const users = await serviceContainer.userservice.getUsers();
            return res.status(200).send(users)
        } catch (error) {
            return res.status(400).json({
                success: false,
                error:error.message
            })
        }
    }

    const getUser = async (req, res) => {
        try {
            const user = await serviceContainer.userservice.getUser(req.params.id);
            return res.status(200).send(user)
        } catch (error) {
            return res.status(400).json({
                success: false,
                error:error.message
            })
        } 
    }

    const deleteUser = async (req, res) => {
        const id = req.params.id;
        try {
            await serviceContainer.userservice.deleteUser(id);
            return res.status(200).send({
                success: true,
                message: `User deleted!`
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error:error.message,
                message: `User doesn't exist`
            })
        }
    }

    const updateUser = async (req, res) => {
        const id = req.params.id

        try {
            const user = await serviceContainer.userservice.updateUser(id, req.body)
            return res.status(200).json({
                success: true,
                message: `User successfully updated`,
                data: user
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error:error.message
            })
        }
    }

    return {
        registerUser,
        getUsers,
        getUser,
        deleteUser,
        updateUser
    }
}

module.exports = UserController;

