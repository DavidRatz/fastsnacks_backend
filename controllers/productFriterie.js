import { getAll, findProductFriterieById, createProductFriterie, updateProductFriterie, deleteOneProductFriterie } from "../repositories/productFriterie.js";

export const getProductFriteries = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('ProductFriteries not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getProductFriterie =  (req, res) => {
    const {id} = req.params;
    findProductFriterieById(id).then(r =>  {
        if(!r){
            throw new Error('ProductFriterie not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addProductFriterie = (req, res) => {
    const productFriterie = { ...req.body };
    createProductFriterie(productFriterie).then(r =>  {
        res.send(`productFriterie added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putProductFriterie = (req, res) => {
    const { id } = req.params;
    const productFriterie = { ...req.body };
    updateProductFriterie(id, productFriterie).then(r =>  {
        if(r==0){
            throw new Error('ProductFriterie not found');
        }
        res.send(`productFriterie updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteProductFriterie = (req, res) => {
    const { id } = req.params;
    deleteOneProductFriterie(id).then(r =>  {
        if(r==0){
                throw new Error('ProductFriterie not found');
        }
        res.send(`productFriterie deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
