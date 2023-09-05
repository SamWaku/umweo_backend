const { prisma } = require("../config/db");

exports.UserModel = prisma.user;