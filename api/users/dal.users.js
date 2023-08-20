
import fs from 'fs';
import { promisify } from 'util';

const getUsers = async (req, res) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        const userStrings = jsonData.map(user => `id: ${user.id}, title: ${user.title}, price: ${user.price}, description: ${user.description}, category: ${user.category}, image: ${user.image}, rating: ${user.rating.rate}, quantity: ${user.quantity}`);
        console.log(userStrings.length)
        const responseString = userStrings.join('\n');

        return responseString; // Send the response to the client
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getUserById = async (id) => {
    try {
        const readFileAsinc = promisify(fs.readFile)
        const dataAsinc = await readFileAsinc('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsinc);
        const user = jsonData.find(user => id === String(user.id));
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};


const userDal = {
    getUsers,
    getUserById
};

export default userDal;




