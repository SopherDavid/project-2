
import fs from 'fs';
import { promisify } from 'util';

const getProducts = async (req, res) => {
    try {
        const readFileAsync = promisify(fs.readFile)
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);
        const productStrings = jsonData.map(product => `id: ${product.id}, title: ${product.title}, price: ${product.price}, description: ${product.description}, category: ${product.category}, image: ${product.image}, rating: ${product.rating.rate}, quantity: ${product.quantity}`);
        console.log(productStrings.length)
        const responseString = productStrings.join('\n');

        return responseString; // Send the response to the client
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};

const getProductsById = async (id) => {
    try {
        const readFileAsync = promisify(fs.readFile)
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);
        const product = jsonData.find(product => id === String(product.id));
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        res.send('Error reading data');
    }
};


const userDal = {
    getProducts,
    getProductsById
};

export default userDal;




