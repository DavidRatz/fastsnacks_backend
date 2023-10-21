import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.Category.findAll();
};

export const findCategoryById = async (id) => {
    return await db.Category.findByPk(id);
};

export const createCategory = async (category) => {
    return await db.Category.create(category);
};

export const updateCategory = async (id, category) => {
    return await db.Category.update(	
        category,{ where: { Id: id } });
};

export const deleteOneCategory = async (id) => {
    return await db.Category.destroy({
        where: { Id: id },
    });
};
