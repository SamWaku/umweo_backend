// import modules 
const LoginSignup = require("../controllers/user/auth/signup-login");
const UserRouter = require("express").Router();

// create user
UserRouter.post("/",LoginSignup.CreateUser);

module.exports=UserRouter;