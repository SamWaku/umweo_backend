const UserRepository = require('../repositories/user-repository')

const UserService = () => {
    const addUser = async (Data) => {
        const { email } = Data;

        //check if the user already exists
        const userExists = await UserRepository.findUserByEmail(email);
        if (userExists){
            throw new Error("User already exists")
        } 

        await User.create(Data)
   }

   const loginUser = async (email) => {

        //check if user exists
        const userExists = await UserRepository.findUserByEmail(email)
        if(!userExists){
            throw new Error("Don't have an account? Please Register!")
        }

        // //checking user password
        // const isMatch = await bcrypt.compare(password, users.password);
        // if(!isMatch){
        //     throw new Error("Don't have an account? Please Register!")
        // }
        users.generateAuthToken();
   }

   const getUsers = async () => {
       const users = await UserRepository.findAllUsers();
       if(users.length<1){
        throw new Error("No users found")
       }
       return users
   }

   const getUser = async (id) => {
        const user = await  UserRepository.findUser(id);
        if(!user) {
            throw new Error(" User not found ")
        }
        return user
   }

//    const getUserOperations = async(userid) => {
    
//    }

   const deleteUser = async (id) => {
        const user = await UserRepository.deleteUser(id);
        if(!user) {
            throw new Error(" User not found ")
        }
        return user
   }

   const updateUser = async (id, Data) => {
        const user = await UserRepository.findUserByID(id)
        if(!user) {
            throw new Error("User not found")
        }

        await User.update(Data, { where: {id: id}})
   }

   return{
    addUser,
    loginUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
   }
}

module.exports = UserService;