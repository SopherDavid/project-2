import userDal from './dal.users.js';

const getUsers = async () => {
    try {
        const users = await userDal.getUsers();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getUserById = async (id) => {
    try {
        const user = await userDal.getUserById(id);
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};


const userService = {
    getUsers,
    getUserById

};

export default userService;