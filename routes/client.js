import { Router } from 'express';

var router = Router();
import { getClients, getClient, addClient, putClient, deleteClient} from '../controllers/client.js';

/* GET users listing. */
router.get('/', getClients);

router.post('/', addClient)

router.get('/:id', getClient)

router.put('/:id', putClient);

router.patch('/:id', putClient);

router.delete('/:id', deleteClient);

export default router;
