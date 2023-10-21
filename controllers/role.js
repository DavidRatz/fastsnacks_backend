import { getAll, findRoleById, createRole, updateRole, deleteOneRole } from "../repositories/role.js";

export const getRoles = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('Roles not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getRole =  (req, res) => {
    const {id} = req.params;
    findRoleById(id).then(r =>  {
        if(!r){
            throw new Error('Role not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addRole = (req, res) => {
    const role = { ...req.body };
    createRole(role).then(r =>  {
        res.send(`role added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putRole = (req, res) => {
    const { id } = req.params;
    const role = { ...req.body };
    updateRole(id, role).then(r =>  {
        if(r==0){
            throw new Error('Role not found');
        }
        res.send(`role updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteRole = (req, res) => {
    const { id } = req.params;
    deleteOneRole(id).then(r =>  {
        if(r==0){
                throw new Error('Role not found');
        }
        res.send(`role deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
