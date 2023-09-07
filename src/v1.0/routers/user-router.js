
// import modules 
const LoginSignup = require("../controllers/user/auth/signup-login");
const ServiceContainer = require('../services');
const UserController = require("../controllers/user/user-controller");
const UserControllerHandler = UserController(ServiceContainer);
const UserRouter = require("express").Router();

// create user
UserRouter.post("/register",LoginSignup.CreateUser);

// loginuser
UserRouter.post("/login", LoginSignup.LoginUser)

// all users
UserRouter.get('/get-users', (req, res) =>
    UserControllerHandler.getUsers(req,res)
)

// single user
UserRouter.get('/get-user/:id', (req,res) => 
    UserControllerHandler.getUser(req, res)
)

// delete user
UserRouter.delete('/delete-user/:id', (req, res)=>
    UserControllerHandler.deleteUser(req,res)
)

// update user
UserRouter.put('/update-user/:id', (req, res) => 
    UserControllerHandler.updateUser(req, res)
)

module.exports=UserRouter;