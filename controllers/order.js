import { getAll, findOrderById, createOrder, updateOrder, deleteOneOrder } from "../repositories/order.js";

export const getOrders = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('Orders not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getOrder =  (req, res) => {
    const {id} = req.params;
    findOrderById(id).then(r =>  {
        if(!r){
            throw new Error('Order not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addOrder = (req, res) => {
    const order = { ...req.body };
    createOrder(order).then(r =>  {
        res.send(`order added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putOrder = (req, res) => {
    const { id } = req.params;
    const order = { ...req.body };
    updateOrder(id, order).then(r =>  {
        if(r==0){
            throw new Error('Order not found');
        }
        res.send(`order updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteOrder = (req, res) => {
    const { id } = req.params;
    deleteOneOrder(id).then(r =>  {
        if(r==0){
                throw new Error('Order not found');
        }
        res.send(`order deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
