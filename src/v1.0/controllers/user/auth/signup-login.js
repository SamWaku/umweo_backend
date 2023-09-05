const { UserModel } = require("../../../models/user-model");

exports.CreateUser = async (req, res) => {
    try {
        const {name, email, password } = req.body;
        const userExists = await UserModel.findUnique({
            where: {
                email: email
            }
        })
        if(userExists){
            throw new Error("User already exists")
        }

        const newUser = {
            name,
            email,
            password,
        }

        await UserModel.create({
            data:{
                name:newUser.name,
                email:newUser.email,
                password:newUser.password
            }
        })
        res.status(201).json({
            success: true,
            message: `User successfully Registered`
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            error: error.message,
        });
    }
}