import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.ProductFriterie.findAll();
};

export const findProductFriterieById = async (id) => {
    return await db.ProductFriterie.findByPk(id);
};

export const createProductFriterie = async (productFriterie) => {
    return await db.ProductFriterie.create(productFriterie);
};

export const updateProductFriterie = async (id, productFriterie) => {
    return await db.ProductFriterie.update(	
        productFriterie,{ where: { Id: id } });
};

export const deleteOneProductFriterie = async (id) => {
    return await db.ProductFriterie.destroy({
        where: { Id: id },
    });
};