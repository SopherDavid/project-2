import productDal from './dal.products.js';

const getProducts = async () => {
    try {
        const products = await productDal.getProducts();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getProductsById = async (id) => {
    try {
        const products = await productDal.getProductsById(id);
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addProducts = async (product) => {
    try {
        const newProduct = await productDal.addProducts(product);
        return newProduct
    } catch (err) {
console.error('Error adding product:', err);
throw err;
    }
}

const productsService = {
    getProducts,
    getProductsById,
    addProducts,
    // updateProducts,
    // deleteProducts,

};

export default productsService;