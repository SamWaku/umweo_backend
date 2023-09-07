const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { JWT_SECRET } = process.env;



exports.auth = async (req, res, next) => {
    try {
       // const token = req.body.token || req.query.token || req.headers
        const bearerHeader = req.headers.authorization ;
        const token  =  bearerHeader.split(' ')[1];
                        console.log(token || req)
        if (!token) {
            return res.send({ status: 403, message: "A token is required for authentication" });
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            return res.send({ status: 401, message: "Invalid token" });
        }
        return next();
    } catch (error) {
        res.send({
            status: 401,
            error,
            message: "User session expired, Login to continue",
        });
        console.log(error)
    };
}