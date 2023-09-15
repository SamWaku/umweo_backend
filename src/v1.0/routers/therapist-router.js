const LoginSignup = require("../controllers/user/auth/therapist-login");
const TherapistRouter = require("express").Router();

TherapistRouter.post('/register',LoginSignup.CreateTherapist);
TherapistRouter.post('/login',LoginSignup.LoginTherapist);
