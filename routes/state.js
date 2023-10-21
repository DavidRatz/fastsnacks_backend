import { Router } from 'express';

var router = Router();
import { getStates, getState, addState, putState, deleteState} from '../controllers/state.js';

router.get('/', getStates);

router.get('/:id', getState)

router.post('/', addState)

router.put('/:id', putState);

router.patch('/:id', putState);

router.delete('/:id', deleteState);

export default router;