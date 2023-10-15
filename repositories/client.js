import { db } from "../dbconfig.js";
//import sql from "mssql";

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
  

/* export async function getDataClients(){
    try {
        let pool = await sql.connect(config);
        let data = await pool.request().query("select * from Client");
        return data.recordsets;
    } catch (error) {
        console.log(error);
    }
}

export async function getDataClientsById(clientId){
    try {
        let pool = await sql.connect(config);
        let data = await pool.request()
                        .input('clientId', sql.Int, clientId)
                        .query("select * from Client where id = @clientId");
        return data.recordsets;
    } catch (error) {
        console.log(error);
    }
}

export async function addDataClients(client){
    try {
        let pool = await sql.connect(config);
        let data = await pool.request()
                        .input('firstName', sql.VarChar, client.firstName)
                        .input('lastName', sql.VarChar, client.lastName)
                        .input('email', sql.VarChar, client.email)
                        .input('password', sql.VarChar, client.password)
                        .input('street', sql.VarChar, client.street)
                        .input('number', sql.VarChar, client.number)
                        .input('postalCode', sql.Int, client.postalCode)
                        .input('city', sql.VarChar, client.city)
                        .input('country', sql.VarChar, client.country)
                        .input('phone', sql.VarChar, client.phone)
                        .query("Insert INTO Client VALUES(@firstName,@lastName, @email, @password, @street, @number, @postalCode, @city, @country, @phone)");
        return data.recordsets;
    } catch (error) {
        console.log(error);
    }
} */