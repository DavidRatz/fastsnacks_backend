import { getAll, findProductById, createProduct, updateProduct, deleteOneProduct } from "../repositories/product.js";

export const getProducts = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('Products not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getProduct =  (req, res) => {
    const {id} = req.params;
    findProductById(id).then(r =>  {
        if(!r){
            throw new Error('Product not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addProduct = (req, res) => {
    const product = { ...req.body };
    createProduct(product).then(r =>  {
        res.send(`product added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putProduct = (req, res) => {
    const { id } = req.params;
    const product = { ...req.body };
    updateProduct(id, product).then(r =>  {
        if(r==0){
            throw new Error('Product not found');
        }
        res.send(`product updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    deleteOneProduct(id).then(r =>  {
        if(r==0){
                throw new Error('Product not found');
        }
        res.send(`product deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
