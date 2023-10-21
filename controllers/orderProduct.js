import { getAll, findOrderProductById, createOrderProduct, updateOrderProduct, deleteOneOrderProduct } from "../repositories/orderProduct.js";

export const getOrderProducts = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('OrderProducts not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getOrderProduct =  (req, res) => {
    const {id} = req.params;
    findOrderProductById(id).then(r =>  {
        if(!r){
            throw new Error('OrderProduct not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addOrderProduct = (req, res) => {
    const orderProduct = { ...req.body };
    createOrderProduct(orderProduct).then(r =>  {
        res.send(`orderProduct added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putOrderProduct = (req, res) => {
    const { id } = req.params;
    const orderProduct = { ...req.body };
    updateOrderProduct(id, orderProduct).then(r =>  {
        if(r==0){
            throw new Error('OrderProduct not found');
        }
        res.send(`orderProduct updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteOrderProduct = (req, res) => {
    const { id } = req.params;
    deleteOneOrderProduct(id).then(r =>  {
        if(r==0){
                throw new Error('OrderProduct not found');
        }
        res.send(`orderProduct deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
