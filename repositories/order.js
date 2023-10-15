import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.Order.findAll();
};

export const findOrderById = async (id) => {
    return await db.Order.findByPk(id);
};

export const createOrder = async (order) => {
    return await db.Order.create(order);
};

export const updateOrder = async (id, order) => {
    return await db.Order.update(	
        order,{ where: { Id: id } });
};

export const deleteOneOrder = async (id) => {
    return await db.Order.destroy({
        where: { Id: id },
    });
};