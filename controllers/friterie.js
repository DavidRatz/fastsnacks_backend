import { getAll, findFriterieById, createFriterie, updateFriterie, deleteOneFriterie } from "../repositories/friterie.js";

export const getFriteries = (req, res) => {
    getAll().then(r =>  {
        if(!r){
            throw new Error('Friteries not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const getFriterie =  (req, res) => {
    const {id} = req.params;
    findFriterieById(id).then(r =>  {
        if(!r){
            throw new Error('Friterie not found');
        }
        res.send(r);
    }).catch((err) => res.status(400).json(err.message));
}

export const addFriterie = (req, res) => {
    const friterie = { ...req.body };
    createFriterie(friterie).then(r =>  {
        res.send(`friterie added to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const putFriterie = (req, res) => {
    const { id } = req.params;
    const friterie = { ...req.body };
    updateFriterie(id, friterie).then(r =>  {
        if(r==0){
            throw new Error('Friterie not found');
        }
        res.send(`friterie updated to the database`);
    }).catch((err) => res.status(400).json(err.message));
}

export const deleteFriterie = (req, res) => {
    const { id } = req.params;
    deleteOneFriterie(id).then(r =>  {
        if(r==0){
                throw new Error('Friterie not found');
        }
        res.send(`friterie deleted from the database`);
    }).catch((err) => res.status(400).json(err.message));
}
