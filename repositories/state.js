import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.State.findAll();
};

export const findStateById = async (id) => {
    return await db.State.findByPk(id);
};

export const createState = async (state) => {
    return await db.State.create(state);
};

export const updateState = async (id, state) => {
    return await db.State.update(	
        state,{ where: { Id: id } });
};

export const deleteOneState = async (id) => {
    return await db.State.destroy({
        where: { Id: id },
    });
};