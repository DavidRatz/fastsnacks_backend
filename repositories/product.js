import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.Product.findAll();
};

export const findProductById = async (id) => {
    return await db.Product.findByPk(id);
};

export const createProduct = async (product) => {
    return await db.Product.create(product);
};

export const updateProduct = async (id, product) => {
    return await db.Product.update(	
        product,{ where: { Id: id } });
};

export const deleteOneProduct = async (id) => {
    return await db.Product.destroy({
        where: { Id: id },
    });
};