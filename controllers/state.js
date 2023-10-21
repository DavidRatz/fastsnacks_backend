import { getAll, findStateById, createState, updateState, deleteOneState } from "../repositories/state.js";

export const getStates = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('States not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getState =  (req, res) => {
    const {id} = req.params;
    findStateById(id).then(r =>  {
        if(!r){
            throw new Error('State not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addState = (req, res) => {
    const state = { ...req.body };
    createState(state).then(r =>  {
        res.send(`state added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putState = (req, res) => {
    const { id } = req.params;
    const state = { ...req.body };
    updateState(id, state).then(r =>  {
        if(r==0){
            throw new Error('State not found');
        }
        res.send(`state updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteState = (req, res) => {
    const { id } = req.params;
    deleteOneState(id).then(r =>  {
        if(r==0){
                throw new Error('State not found');
        }
        res.send(`state deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
