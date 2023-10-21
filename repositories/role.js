import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.Role.findAll();
};

export const findRoleById = async (id) => {
    return await db.Role.findByPk(id);
};

export const createRole = async (role) => {
    return await db.Role.create(role);
};

export const updateRole = async (id, role) => {
    return await db.Role.update(	
        role,{ where: { Id: id } });
};

export const deleteOneRole = async (id) => {
    return await db.Role.destroy({
        where: { Id: id },
    });
};