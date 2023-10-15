import { v4 as uuidv4 } from "uuid";
import { getAll, findClientById, createClient, updateClient, updateSomeParamClient, deleteOneClient } from "../repositories/client.js";

let users = [];

export const getClients = (req, res) => {
  getAll().then(r =>  {
    if(!r){
      throw new Error('Clients not found');
    }
    res.send(r);
  }).catch((err) => res.status(400).json(err.message));
}

export const getClient =  (req, res) => {
  const {id} = req.params;
  findClientById(id).then(r =>  {
    if(!r){
      throw new Error('Client not found');
    }
    res.send(r);
  }).catch((err) => res.status(400).json(err.message));
}

export const addClient = (req, res) => {
    const client = { ...req.body };

    createClient(client).then(r =>  {
      res.send(`User ${client.firstName} added to the database`);
    }).catch((err) => res.status(400).json(err.message));

}

export const putClient = (req, res) => {
  const { id } = req.params;
  const client = { ...req.body };
  updateClient(id, client).then(r =>  {
    console.log(r);
    // if(!r){
    //   throw new Error('Client not found');
    // }
    res.send(`User ${client.firstName} updated to the database`);
  }).catch((err) => res.status(400).json(err.message));
}

export const patchClient = (req, res) => {
  const { id } = req.params;
  const client = { ...req.body };

  updateSomeParamClient(id, client).then(r =>  {
    res.send(`User ${client.firstName} updated to the database`);
  }).catch((err) => res.status(400).json(err.message));
}

export const deleteClient = (req, res) => {
    const { id } = req.params;
    deleteOneClient(id).then(r =>  {
      res.send(`User with id ${id} deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
