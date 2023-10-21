import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.OrderProduct.findAll();
};

export const findOrderProductById = async (id) => {
    return await db.OrderProduct.findByPk(id);
};

export const createOrderProduct = async (orderProduct) => {
    return await db.OrderProduct.create(orderProduct);
};

export const updateOrderProduct = async (id, orderProduct) => {
    return await db.OrderProduct.update(	
        orderProduct,{ where: { Id: id } });
};

export const deleteOneOrderProduct = async (id) => {
    return await db.OrderProduct.destroy({
        where: { Id: id },
    });
};