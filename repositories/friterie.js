import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.Friterie.findAll();
};

export const findFriterieById = async (id) => {
    return await db.Friterie.findByPk(id);
};

export const createFriterie = async (friterie) => {
    return await db.Friterie.create(friterie);
};

export const updateFriterie = async (id, friterie) => {
    return await db.Friterie.update(	
        friterie,{ where: { Id: id } });
};

export const deleteOneFriterie = async (id) => {
    return await db.Friterie.destroy({
        where: { Id: id },
    });
};