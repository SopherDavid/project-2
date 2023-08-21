import productsService from './service.products.js';

const getAllProducts = async (req, res) => {
    try {
        console.log("getAllUsers")
        const products = await productsService.getProducts();
        if (products.length > 0)
            return res.status(200).send(products
                // "message": "products fetch successfully!",
                // "data": products
            )
        else {
            return res.status(404).json({ "message": "No products" })
        }
    } catch (error) {
        console.error(error)
    }
};

const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await productsService.getProductsById(id);
        if(products) {
            return res.status(200).json(products)
        } else {
            return res.status(404).json({ "message": "product not found" })

        }
    } catch (error) {
        console.error(error)
    }
};


const addProduct = async (req, res) => {
  try {
      const newProduct = await productsService.addProduct(req.body);
      res.status(201).json(newProduct); 
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Server error' });
  }
};

const updateProducts = async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      const updatedProduct = req.body;
      const product = await productsService.updateProduct(productId, updatedProduct);
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json(product);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Server error" });
    }
};
  
const deleteProducts = async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      const deleteProduct = await productsService.deleteProduct(productId);
  
      if (!deleteProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json(deleteProduct);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Server error" }); 
    }
};
  

const productController = {
    getAllProducts,
    getProductsById,
    addProduct,
    updateProducts,
    deleteProducts
};


export default productController;
