import userService from './service.users.js';

const getAllUsers = async (req, res) => {
    try {
        console.log("getAllUsers")
        const users = await userService.getUsers();
        if (users.length > 0)
            return res.status(200).send(users
                // "message": "Users fetch successfully!",
                // "data": users
            )
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        if(user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).json({ "message": "user not found" })

        }
    } catch (error) {
        console.error(error)
    }
};
const userController = {
    getAllUsers,
    getUserById
};


export default userController;




