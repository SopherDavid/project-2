
import fs from 'fs';
import { promisify } from 'util';


const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);


const getProducts = async (req, res) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf8');
        const jsonData = JSON.parse(dataAsync);
        // const productStrings = jsonData.map(product => `id: ${product.id}, title: ${product.title}, price: ${product.price}, description: ${product.description}, category: ${product.category}, image: ${product.image}, rating: ${product.rating.rate}, quantity: ${product.quantity}`);
        // console.log(productStrings.length)
        // const responseString = productStrings.join('\n');
        return jsonData;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err
    }
};

const getProductsById = async (id) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf8');

        const jsonData = JSON.parse(dataAsync);
        const product = jsonData.find(product => id === String(product.id));
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err
    }
};


const addProducts = async (product) => {
    try {
        let jsonData = await getProducts();
        const newProductId = jsonData.length +1;
        const newProduct = {id: newProductId, ...product};
        jsonData.push(newProduct);
        await writeFileAsync('./data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
        console.log("product added successfully.");
        return newProduct;

    } catch (err) {
        console.error('Error reading data:', err);
        throw err
    }
};


const updateProducts = async (id, updatedProduct) => {
    try {  
        const dataAsync = await readFileAsync('./data.json', 'utf8');

        let jsonData = JSON.parse(dataAsync);
        const productIndex = jsonData.findIndex(product => id === String(product.id));
        
        
        if (productIndex !== -1) {
            jsonData[productIndex] = { ...jsonData[productIndex], ...updatedProduct };
            await writeFileAsync('./data.json', JSON.stringify(jsonData, null, 2), 'utf8');
            return jsonData[productIndex];
        } else {
            return null; // Product not found
        }

    } catch {
        console.error('Error reading data:', err);
        throw err;
    }
}

const deleteProducts = async (id) => {
    try {
        const dataAsync = await readFileAsync('./data.json', 'utf8');

        let jsonData = JSON.parse(dataAsync);
        const updatedData = jsonData.filter(product => id !== String(product.id));

        await writeFileAsync('./data.json', JSON.stringify(updatedData, null, 2), 'utf8');
        console.log('Product deleted successfully.');

    } catch (error) {
        console.error('Error deleting product:', err);
        throw err;
    }

}

const productDal = {
    getProducts,
    getProductsById,
    addProducts,
    updateProducts,
    deleteProducts
};

export default productDal;

