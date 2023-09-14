// import modules
const { UserModel } = require("../../../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// environment variables
const { JWT_SECRET } = process.env;

// signup functionality
exports.CreateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await UserModel.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      throw new Error("User already exists");
    }

    const newUser = {
      name,
      email,
      password,
    };

    newUser.password = bcrypt.hashSync(newUser.password, 12);

    const user=await UserModel.create({
      data: {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      },
    });
    res.status(201).json({
      userid: user.id,
      success: true,
      message: `User successfully Registered`,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      error: error.message,
    });
  }
};

// login functionality
exports.LoginUser = async (req, res) => {
  //return res.send("login")
  try {
    const { email, password } = req.body;
    const user = await UserModel.findUnique({ where: { email: email } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Don't have an account? Please Register!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Incorrect password, try again" });
    // await user.generateAuthToken()
    //await user.generateRefreshToken();
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "50m",
    });

    res.status(200).send({
      userid: user.id,
      token: token,
      message: "login successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
