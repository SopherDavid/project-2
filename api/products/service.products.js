import userDal from './dal.products.js';

const getProducts = async () => {
    try {
        const products = await userDal.getProducts();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getProductsById = async (id) => {
    try {
        const products = await userDal.getProductsById(id);
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};


const productsService = {
    getProducts,
    getProductsById

};

export default productsService;