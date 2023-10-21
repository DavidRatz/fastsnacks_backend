import { Router } from 'express';

var router = Router();
import { getFriteries, getFriterie, addFriterie, putFriterie, deleteFriterie} from '../controllers/friterie.js';

router.get('/', getFriteries);

router.get('/:id', getFriterie)

router.post('/', addFriterie)

router.put('/:id', putFriterie);

router.patch('/:id', putFriterie);

router.delete('/:id', deleteFriterie);

export default router;