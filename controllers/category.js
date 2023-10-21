import { getAll, findCategoryById, createCategory, updateCategory, deleteOneCategory } from "../repositories/category.js";

export const getCategorys = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('Categorys not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getCategory =  (req, res) => {
    const {id} = req.params;
    findCategoryById(id).then(r =>  {
        if(!r){
            throw new Error('Category not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addCategory = (req, res) => {
    const category = { ...req.body };
    createCategory(category).then(r =>  {
        res.send(`category added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putCategory = (req, res) => {
    const { id } = req.params;
    const category = { ...req.body };
    updateCategory(id, category).then(r =>  {
        if(r==0){
            throw new Error('Category not found');
        }
        res.send(`category updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteCategory = (req, res) => {
    const { id } = req.params;
    deleteOneCategory(id).then(r =>  {
        if(r==0){
                throw new Error('Category not found');
        }
        res.send(`category deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
