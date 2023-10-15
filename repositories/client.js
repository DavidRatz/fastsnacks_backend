import { db } from "../dbconfig.js";

export const getAll = async () => {
    return await db.Client.findAll();
};

export const findClientById = async (id) => {
    return await db.Client.findByPk(id);
};

export const createClient = async (client) => {
    const newPerson = await db.Client.create(client);
    return newPerson;
};

export const updateClient = async (id, client) => {
    // findClientById(id).then( r => {
    //     if(r){
    //         r.update(client);
    //         return r;
    //     }
    // });

    return await db.Client.update(
        client,
        {
            where: {
                Id: id,
            },
        }
    );
    
};

export const deleteOneClient = async (id) => {
    return await db.Client.destroy({
        where: { Id: id },
    });
};