const { TherapistModel } = require('../../../models/therapist-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// environment variables
const { JWT_SECRET } = process.env;

// signup functionality
exports.CreateTherapist = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await TherapistModel.findUnique({
            where: {
                email: email
            }
        })
        if (userExists) {
            throw new Error("User already exists")
        }

        const newLecture = {
            name,
            email,
            password,
        }

        newLecture.password = bcrypt.hashSync(newLecture.password, 12);

        await TherapistModel.create({
            data: {
                name: newLecture.name,
                email: newLecture.email,
                password: newLecture.password
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

// login functionality
exports.LoginTherapist = async (req, res) => {
    //return res.send("login")
    try {
        const { email, password } = req.body;
        const user = await TherapistModel.findUnique({ where: { email: email } })
        if (!user) {
            return res.status(401).json({ message: "Don't have an account? Please Register!", });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Incorrect password, try again' });
        // await user.generateAuthToken()
        //await user.generateRefreshToken();
        const token = jwt.sign({ "id": user._id, "email": user.email }, JWT_SECRET, {
            expiresIn: '50m',
        },)

        res.status(200).send({
            userid: user.id,
            token: token,
            message: "login successful",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}